import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  ERiskType
} from '../../../enum';
import {
  IDialogData,
  IRiskPromptResolveData,
  TReRequestWithVerifyResult
} from '../../../types';
import intl from '../../../intl';
import {
  handleRiskPromptDialogSubmit
} from '../../../util';

interface IGenerateSubAccountMfaSubmitButtonProps {
  primaryButtonDisabled: boolean;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}

export default function generateSubAccountSubmitButton({
  primaryButtonDisabled,
  reRequestWithVerifyResult
}: IGenerateSubAccountMfaSubmitButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:confirm'),
    primary: true,
    disabled: primaryButtonDisabled,
    onClick(contentContext) {
      handleRiskPromptDialogSubmit({
        contentContext,
        reRequestWithVerifyResult,
        dialogSubmitType: ERiskType.NEW_SUB
      });

      // 阻止弹窗关闭，使得只能通过主动调用 close 关闭弹窗
      return false;
    }
  };
}
