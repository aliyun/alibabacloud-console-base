import React from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  INewSubAccountRisk
} from '../../types';
import {
  EStep
} from '../../const';

import {
  U2FAuth,
  VMfaAuth
} from './mfa-auth';
import {
  U2FBind,
  VMfaBind
} from './mfa-bind';
import MfaChoose from './mfa-choose';

export default function Content(): JSX.Element {
  const {
    data: {
      step
    }
  } = useDialog<void, INewSubAccountRisk>();

  switch (step) {
    case EStep.MFA_CHOOSE:
      return <MfaChoose />;
    case EStep.VMFA_BIND:
      return <VMfaBind />;
    case EStep.U2F_BIND:
      return <U2FBind />;
    case EStep.U2F_AUTH:
      return <U2FAuth />;
    default:
      return <VMfaAuth />;
  }
}
