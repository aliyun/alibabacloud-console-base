import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../types';
import intl from '../../../intl';

interface IGenerateOldMainOrDowngradeMpkSubmitButtonProps {
  verifyType: string;
  primaryButtonDisabled: boolean;
}

export default function generateOldMainOrDowngradeMpkSubmitButton({
  verifyType,
  primaryButtonDisabled
}: IGenerateOldMainOrDowngradeMpkSubmitButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
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
        apiErrorMessage: ''
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
}