import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData,
  TReRequestWithVerifyResult
} from '../../../types';
import {
  ERiskType
} from '../../../enum';
import intl from '../../../intl';
import {
  handleRiskPromptDialogSubmit
} from '../../../utils';

interface IGenerateOldMainOrDowngradeMpkSubmitButtonProps {
  verifyType: string;
  primaryButtonDisabled?: boolean;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}

export default function generateOldMainOrDowngradeMpkSubmitButton({
  verifyType,
  primaryButtonDisabled,
  reRequestWithVerifyResult
}: IGenerateOldMainOrDowngradeMpkSubmitButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:confirm'),
    disabled: Boolean(primaryButtonDisabled),
    onClick(contentContext) {
      handleRiskPromptDialogSubmit({
        verifyType,
        contentContext,
        reRequestWithVerifyResult,
        dialogSubmitType: ERiskType.OLD_MAIN
      });

      // return false 用于阻止风控弹窗关闭，使得风控弹窗只能通过 close 函数关闭
      return false;
    }
  };
}