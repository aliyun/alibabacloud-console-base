import {
  FetcherFnRequest,
  FetcherError,
  canHaveBody,
  mergeConfig
} from '@alicloud/fetcher';
import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogDataNewSubAccountRisk,
  ITokenVerifyData,
  IPayloadSkipBindMfa
} from '../../../../types';
import {
  TICKET_TYPE
} from '../../../../const';
import {
  ESlsResultType
} from '../../../../enum';
import intl from '../../../../intl';
import {
  slsSkipBindMfa,
  slsSubRisk
} from '../../../../sls';

import {
  IParams
} from './_type';

interface IProps extends Pick<IParams, 'fetcherConfig' | 'riskConfig'> {
  request: FetcherFnRequest;
  accountId: string;
  verifyType: string;
  codeType: string;
}

export default function generateSkipBindMfaButton({
  request,
  accountId,
  verifyType,
  codeType,
  riskConfig,
  fetcherConfig
}: IProps) {
  return (): DialogButtonProps<unknown, IDialogDataNewSubAccountRisk> => ({
    label: intl('op:skip'),
    primary: false,
    onClick({
      lock,
      unlock,
      close,
      updateData
    }) {
      lock(true);

      const skipBindMfaPayload: IPayloadSkipBindMfa = {
        AccountId: accountId,
        TicketType: TICKET_TYPE,
        Ext: JSON.stringify({
          codeType
        })
      };

      request<ITokenVerifyData>({
        method: riskConfig.REQUEST_METHOD,
        headers: {
          'Content-Type': 'application/json'
        },
        url: riskConfig.URL_SKIP_BIND_MFA,
        body: {
          ...skipBindMfaPayload
        }
      }).then(skipBindMfaData => {
        slsSkipBindMfa({
          accountId,
          slsResultType: ESlsResultType.SUCCESS
        });

        const verifyResult = {
          verifyType,
          verifyCode: skipBindMfaData.IvToken
        };

        request<unknown>(mergeConfig(fetcherConfig, canHaveBody(fetcherConfig) ? {
          body: verifyResult
        } : {
          params: verifyResult
        })).then(result => {
          slsSubRisk({
            accountId,
            slsResultType: ESlsResultType.SKIP_BIND_SUCCESS
          });

          unlock();

          close(result);
        }).catch((error: FetcherError) => {
          unlock();

          slsSubRisk({
            accountId,
            slsResultType: ESlsResultType.SKIP_BIND_FAIL
          });

          if (error.code === riskConfig.CODE_INVALID_INPUT || error.code === riskConfig.CODE_NEED_VERIFY) {
            updateData({
              errorMessage: intl('message:code_incorrect')
            });
          } else {
            close(error, true);
          }
        });
      }).catch(error => {
        const errMsg = (error as Error).message || '';

        slsSkipBindMfa({
          accountId,
          slsResultType: ESlsResultType.FAIL,
          errorMessage: errMsg
        });

        updateData({
          errorMessage: errMsg
        });
      });

      unlock();

      return false; // 阻止弹窗关闭
    }
  });
}