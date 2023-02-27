import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../types';
import {
  ESubBindMfaStep
} from '../../../../enum';
import intl from '../../../../intl';

export default function generatePreviousStepButton(): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:previous_step'),
    primary: false,
    onClick({
      updateData
    }) {
      updateData({
        apiErrorMessage: '',
        subBindMfaStep: ESubBindMfaStep.CHOOSE_BIND_MFA_TYPE
      });
      
      // return false 阻止弹窗关闭
      return false;
    }
  };
}