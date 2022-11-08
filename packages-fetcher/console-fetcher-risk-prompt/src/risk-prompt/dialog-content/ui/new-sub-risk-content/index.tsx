import React from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../types';
import {
  EDialogType
} from '../../../../const';

import {
  U2FAuth,
  VMfaAuth
} from './mfa-auth';
import {
  U2FBind,
  VMfaBind
} from './mfa-bind';
import MfaChoose from './mfa-choose';

export default function NewSubRiskUi(): JSX.Element {
  const {
    data: {
      dialogType
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();
 
  // TODO 添加容错机制
  switch (dialogType) {
    case EDialogType.SUB_RISK_MFA_CHOOSE:
      return <MfaChoose />;
    case EDialogType.SUB_RISK_U2F_BIND:
      return <U2FBind />;
    case EDialogType.SUB_RISK_VMFA_BIND:
      return <VMfaBind />;
    case EDialogType.SUB_RISK_U2F_AUTH:
      return <U2FAuth />;
    default:
      return <VMfaAuth />;
  }
}