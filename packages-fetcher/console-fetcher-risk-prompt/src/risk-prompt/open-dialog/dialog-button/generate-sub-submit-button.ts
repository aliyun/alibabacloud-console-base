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

interface IGenerateSubAccountMfaSubmitButtonProps {
  primaryButtonDisabled: boolean;
}

export default function generateSubAccountSubmitButton({
  primaryButtonDisabled
}: IGenerateSubAccountMfaSubmitButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:confirm'),
    primary: true,
    disabled: primaryButtonDisabled,
    onClick(contentContext) {
      handleRiskPromptDialogSubmit({
        contentContext,
        dialogSubmitType: 'new_sub'
      });

      // 阻止弹窗关闭，使得只能通过主动调用 close 关闭弹窗
      return false;
    }
  };
}