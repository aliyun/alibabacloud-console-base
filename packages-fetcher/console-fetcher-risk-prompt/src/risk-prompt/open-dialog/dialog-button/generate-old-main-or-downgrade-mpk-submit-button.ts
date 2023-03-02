import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../types';
import intl from '../../../intl';
import {
  handleRiskPromptDialogSubmit
} from '../../../utils';

interface IGenerateOldMainOrDowngradeMpkSubmitButtonProps {
  verifyType: string;
  primaryButtonDisabled: boolean;
}

export default function generateOldMainOrDowngradeMpkSubmitButton({
  verifyType,
  primaryButtonDisabled
}: IGenerateOldMainOrDowngradeMpkSubmitButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:confirm'),
    disabled: primaryButtonDisabled,
    onClick(contentContext) {
      handleRiskPromptDialogSubmit({
        verifyType,
        contentContext,
        dialogSubmitType: 'old_main_or_downgrade_mpk'
      });

      return false;
    }
  };
}