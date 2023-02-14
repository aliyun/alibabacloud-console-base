import React from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  EDialogType
} from '../../enum';
import AltWrap from '../../rc/alt-wrap';
import NewSubRiskContent from '../new-sub-risk-content';
import MfaBind from '../new-sub-risk-content/mfa-bind';
import NewMainRiskContent from '../new-main-risk-content';
import OldMainOrMpkRiskContent from '../old-main-or-mpk-risk-content';

export default function DialogContentUi(): JSX.Element {
  const {
    data: {
      dialogType,
      apiErrorMessage
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  switch (dialogType) {
    case EDialogType.NEW_MAIN_RISK:
      return <NewMainRiskContent />;
    case EDialogType.OLD_MAIN_OR_MPK_RISK:
      return <OldMainOrMpkRiskContent />;
    case EDialogType.ERROR:
      return <AltWrap content={apiErrorMessage} />;
    case EDialogType.SUB_RISK_MFA_BIND:
      return <MfaBind />;
    default:
      return <NewSubRiskContent />;
  }
}