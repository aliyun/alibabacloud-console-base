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
    onClick(contentContext) {
      handleRiskPromptDialogSubmit({
        codeType,
        accountId,
        verifyType,
        contentContext,
        dialogSubmitType: 'new_mpk'
      });

      return false;
    }
  };
}