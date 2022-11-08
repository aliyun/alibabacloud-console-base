import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../types';
import intl from '../../../intl';

interface IGenerateOldMainOrMpkDowngradeSubmitButtonProps {
  verifyType: string;
}

export default function generateOldMainOrDowngradeMpkSubmitButton({
  verifyType
}: IGenerateOldMainOrMpkDowngradeSubmitButtonProps): (primaryButtonDisabled: boolean) => DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return primaryButtonDisabled => {
    return {
      disabled: primaryButtonDisabled,
      label: intl('op:confirm'),
      onClick({
        data,
        updateData,
        lock,
        close
      }) {
        lock(true);
        updateData({
          errorMessage: ''
        });
  
        const {
          mainOrMpkAccountData
        } = data;
        const requestId = mainOrMpkAccountData?.requestId || 'EMPTY_OLD_MAIN_REQUEST_ID';
  
        const params = {
          requestId,
          verifyType,
          verifyCode: mainOrMpkAccountData?.code || 'EMPTY_OLD_MAIN_CODE'
        };
        
        close(params);
  
        return false;
      }
    };
  };
}