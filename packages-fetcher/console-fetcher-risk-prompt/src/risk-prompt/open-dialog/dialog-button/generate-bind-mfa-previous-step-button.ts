import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../types';
import {
  EDialogType
} from '../../../const';
import intl from '../../../intl';

export default function generateBindMfaPreviousStepButton(): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:previous_step'),
    primary: false,
    onClick({
      updateData
    }) {
      updateData({
        errorMessage: '',
        dialogType: EDialogType.SUB_RISK_MFA_CHOOSE,
        primaryButtonDisabled: false
      });
      
      // return false 阻止弹窗关闭
      return false;
    }
  };
}