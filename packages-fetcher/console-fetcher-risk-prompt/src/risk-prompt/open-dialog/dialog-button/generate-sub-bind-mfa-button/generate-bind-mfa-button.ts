import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData,
  TReRequestWithVerifyResult
} from '../../../../types';
import intl from '../../../../intl';
import {
  handleRiskPromptDialogSubmit
} from '../../../../utils';

interface IGenerateBindMfaButtonProps {
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}

export default function generateBindMfaButton({
  reRequestWithVerifyResult
}: IGenerateBindMfaButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:confirm'),
    primary: true,
    disabled: false,
    onClick(contentContext) {
      handleRiskPromptDialogSubmit({
        contentContext,
        reRequestWithVerifyResult,
        dialogSubmitType: 'bind_mfa'
      });

      // 阻止弹窗关闭，使得只能通过主动调用 close 关闭弹窗
      return false;
    }
  };
}