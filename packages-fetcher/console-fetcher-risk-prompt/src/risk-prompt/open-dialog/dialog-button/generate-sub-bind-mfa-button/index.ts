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

import generateBindMfaButton from './generate-bind-mfa-button';
import generatePreviousStepButton from './generate-previous-step-button';
import generateSkipBindMfaButton from './generate-skip-bind-mfa-button';
import generateChooseMfaTypeButton from './generate-choose-mfa-type-button';

interface IProps {
  codeType: string;
  accountId: string;
  subBindMfaStep?: ESubBindMfaStep;
  primaryButtonDisabled: boolean;
}

export default function generateSubBindMfaButton({
  codeType,
  accountId,
  subBindMfaStep,
  primaryButtonDisabled
}: IProps): DialogButtonProps<IRiskPromptResolveData, IDialogData>[] {
  switch (subBindMfaStep) {
    case ESubBindMfaStep.CHOOSE_BIND_MFA_TYPE: {
      const chooseMfaTypeButton = generateChooseMfaTypeButton({
        primaryButtonDisabled
      });
      const skipBindMfaButton = generateSkipBindMfaButton({
        codeType,
        accountId
      });

      return [chooseMfaTypeButton, skipBindMfaButton];
    }
    case ESubBindMfaStep.BIND_U2F:
    case ESubBindMfaStep.BIND_VMFA: {
      const previousStepButton = generatePreviousStepButton();
      const bindMfaButton = generateBindMfaButton({
        primaryButtonDisabled
      });

      return [previousStepButton, bindMfaButton];
    }
    default:
      return [];
  }
}