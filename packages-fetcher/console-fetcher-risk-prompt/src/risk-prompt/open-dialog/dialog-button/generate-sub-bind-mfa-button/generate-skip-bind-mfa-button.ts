import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';
import {
  dataSkipBindMfa,
  ParamsSkipBindMfa
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../types';
import {
  ESceneKey
} from '../../../../enum';
import intl from '../../../../intl';

interface IGenerateSkipBindMfaButtonProps {
  codeType: string;
  accountId: string;
}

export default function generateSkipBindMfaButton({
  codeType,
  accountId
}: IGenerateSkipBindMfaButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:skip'),
    primary: false,
    onClick({
      data,
      lock,
      unlock,
      close,
      updateData
    }) {
      lock(true);

      const {
        errorMessageObject
      } = data;

      const skipBindMfaParams: ParamsSkipBindMfa = {
        accountId,
        ext: JSON.stringify({
          codeType
        })
      };

      dataSkipBindMfa(skipBindMfaParams).then(skipBindMfaData => {
        const ivToken = skipBindMfaData.ivToken || 'EMPTY_IV_TOKEN';
        const params = {
          verifyType: 'ga' as const,
          verifyCode: ivToken
        };

        close(params);
      }).catch(error => {
        updateData({
          errorMessageObject: {
            ...errorMessageObject,
            [ESceneKey.BIND_MFA]: (error as Error).message
          }
        });
      }).finally(() => {
        unlock();
      });

      return false;
    }
  };
}