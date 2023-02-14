import * as React from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../types';
import {
  ESubBindMfaStep
} from '../../../enum';
import U2fBind from '../../u2f-auth-or-bind';

import VmfaBind from './vmfa-bind';
import BindMfaTypeChoose from './bind-mfa-type-choose';

export default function MfaBind(): JSX.Element {
  const {
    data: {
      subBindMfaStep
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  switch (subBindMfaStep) {
    case ESubBindMfaStep.BIND_U2F:
      return <U2fBind type="u2f_bind" />;
    case ESubBindMfaStep.BIND_VMFA:
      return <VmfaBind />;
    default:
      return <BindMfaTypeChoose />;
  }
}