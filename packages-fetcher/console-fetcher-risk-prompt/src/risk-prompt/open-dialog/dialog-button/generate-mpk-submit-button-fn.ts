import {
  EAccountType,
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

import {
  IGenerateButtonProps
} from './_type';

export default function generateMpkSubmitButton({
  codeType,
  accountId,
  verifyType
}: IGenerateButtonProps): (primaryButtonDisabled: boolean) => DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return primaryButtonDisabled => {
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
          errorMessage: '',
          primaryButtonDisabled: true
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
          idType: EAccountType.MAIN,
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
            errorMessage: error?.message || ''
          });
        }).finally(() => {
          updateData({
            primaryButtonDisabled: false
          });
        });
  
        unlock();
  
        return false;
      }
    };
  };
}