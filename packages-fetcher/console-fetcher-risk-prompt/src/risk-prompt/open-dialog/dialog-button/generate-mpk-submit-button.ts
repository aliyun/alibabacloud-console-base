import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  ERiskType
} from '../../../enum';
import {
  IDialogData,
  IRiskPromptResolveData,
  TReRequestWithVerifyResult,
  TSetRiskCanceledErrorProps
} from '../../../types';
import intl from '../../../intl';
import {
  handleRiskPromptDialogSubmit
} from '../../../util';

interface IGenerateMpkSubmitButtonProps {
  codeType: string;
  accountId: string;
  verifyType: string;
  primaryButtonDisabled?: boolean;
  setRiskCanceledErrorProps: TSetRiskCanceledErrorProps;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}

export default function generateMpkSubmitButton({
  codeType,
  accountId,
  verifyType,
  primaryButtonDisabled,
  setRiskCanceledErrorProps,
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
        setRiskCanceledErrorProps,
        reRequestWithVerifyResult,
        dialogSubmitType: ERiskType.MPK
      });

      // return false 用于阻止风控弹窗关闭，使得风控弹窗只能通过 close 函数关闭
      return false;
    }
  };
}
