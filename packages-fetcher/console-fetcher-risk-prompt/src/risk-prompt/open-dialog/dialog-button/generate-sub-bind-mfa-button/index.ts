import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData,
  TReRequestWithVerifyResult
} from '../../../../types';
import {
  ESubBindMfaStep
} from '../../../../enum';

import generateBindMfaButton from './generate-bind-mfa-button';
import generatePreviousStepButton from './generate-previous-step-button';
import generateSkipBindMfaButton from './generate-skip-bind-mfa-button';
import generateChooseMfaTypeButton from './generate-choose-mfa-type-button';

interface IProps {
  codeType: string;
  accountId: string;
  subBindMfaStep?: ESubBindMfaStep;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}

export default function generateSubBindMfaButton({
  codeType,
  accountId,
  subBindMfaStep,
  reRequestWithVerifyResult
}: IProps): DialogButtonProps<IRiskPromptResolveData, IDialogData>[] {
  switch (subBindMfaStep) {
    case ESubBindMfaStep.CHOOSE_BIND_MFA_TYPE: {
      const chooseMfaTypeButton = generateChooseMfaTypeButton();
      const skipBindMfaButton = generateSkipBindMfaButton({
        codeType,
        accountId,
        reRequestWithVerifyResult
      });

      return [chooseMfaTypeButton, skipBindMfaButton];
    }
    case ESubBindMfaStep.BIND_U2F:
    case ESubBindMfaStep.BIND_VMFA: {
      const previousStepButton = generatePreviousStepButton();
      const bindMfaButton = generateBindMfaButton({
        reRequestWithVerifyResult
      });

      return [previousStepButton, bindMfaButton];
    }
    default:
      return [];
  }
}