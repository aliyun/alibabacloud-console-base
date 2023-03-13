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

interface IGenerateSkipBindMfaButtonProps {
  codeType: string;
  accountId: string;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}

export default function generateSkipBindMfaButton({
  codeType,
  accountId,
  reRequestWithVerifyResult
}: IGenerateSkipBindMfaButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:skip'),
    primary: false,
    onClick(contentContext) {
      handleRiskPromptDialogSubmit({
        accountId,
        codeType,
        contentContext,
        reRequestWithVerifyResult,
        dialogSubmitType: 'skip_bind_mfa'
      });

      // return false 用于阻止风控弹窗关闭，使得风控弹窗只能通过 close 函数关闭
      return false;
    }
  };
}