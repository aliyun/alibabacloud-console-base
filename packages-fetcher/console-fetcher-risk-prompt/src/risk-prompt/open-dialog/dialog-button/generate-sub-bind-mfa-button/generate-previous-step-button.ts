import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../types';
import {
  ESceneKey,
  ESubBindMfaStep
} from '../../../../enum';
import intl from '../../../../intl';

export default function generatePreviousStepButton(): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:previous_step'),
    primary: false,
    onClick({
      data,
      updateData
    }) {
      const {
        errorMessageObject
      } = data;

      updateData({
        errorMessageObject: {
          ...errorMessageObject,
          [ESceneKey.BIND_MFA]: ''
        },
        subBindMfaStep: ESubBindMfaStep.CHOOSE_BIND_MFA_TYPE
      });
      
      // return false 阻止弹窗关闭
      return false;
    }
  };
}