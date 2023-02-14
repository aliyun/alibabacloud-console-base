import {
  dataVerifyMpk
} from '@alicloud/console-fetcher-risk-data';
import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../types';
import intl from '../../../intl';

interface IGenerateMpkSubmitButtonProps {
  codeType: string;
  accountId: string;
  verifyType: string;
  primaryButtonDisabled: boolean;
}

export default function generateMpkSubmitButton({
  codeType,
  accountId,
  verifyType,
  primaryButtonDisabled
}: IGenerateMpkSubmitButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    disabled: primaryButtonDisabled,
    label: intl('op:confirm'),
    onClick({
      data,
      updateData,
      lock,
      unlock,
      close
    }) {
      lock(true);
      updateData({
        apiErrorMessage: ''
      });

      const {
        mainOrMpkAccountData
      } = data;

      const authCode = mainOrMpkAccountData?.code || 'EMPTY_MPK_AUTH_CODE';
      const riskRequestId = mainOrMpkAccountData?.requestId || 'EMPTY_MPK_REQUEST_ID';
      
      dataVerifyMpk({
        authCode,
        accountId,
        verifyType,
        riskRequestId,
        ext: JSON.stringify({
          codeType
        })
      }).then(verifyMpkData => {
        const ivToken = verifyMpkData.ivToken || 'EMPTY_MPK_IV_TOKEN';
        const params = {
          verifyType,
          verifyCode: ivToken
        };

        close(params);
      }).catch(error => {
        updateData({
          apiErrorMessage: error?.message || ''
        });
      }).finally(() => {
        unlock();
      });

      return false;
    }
  };
}