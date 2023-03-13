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

interface IGenerateMpkSubmitButtonProps {
  codeType: string;
  accountId: string;
  verifyType: string;
  primaryButtonDisabled?: boolean;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}

export default function generateMpkSubmitButton({
  codeType,
  accountId,
  verifyType,
  primaryButtonDisabled,
  reRequestWithVerifyResult
}: IGenerateMpkSubmitButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:confirm'),
    disabled: Boolean(primaryButtonDisabled),
    onClick(contentContext) {
      handleRiskPromptDialogSubmit({
        codeType,
        accountId,
        verifyType,
        contentContext,
        reRequestWithVerifyResult,
        dialogSubmitType: ERiskType.MPK
      });

      // return false 用于阻止风控弹窗关闭，使得风控弹窗只能通过 close 函数关闭
      return false;
    }
  };
}