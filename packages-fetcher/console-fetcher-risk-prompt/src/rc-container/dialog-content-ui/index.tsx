import React from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  EDialogType
} from '../../enum';
import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import RiskPromptError from '../risk-prompt-error';
import NewSubRiskContent from '../new-sub-risk-content';
import NewMainRiskContent from '../new-main-risk-content';
import OldMainOrMpkRiskContent from '../old-main-or-mpk-risk-content';

export default function DialogContentUi(): JSX.Element {
  const {
    data: {
      dialogType
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  switch (dialogType) {
    case EDialogType.NEW_MAIN_RISK:
      return <NewMainRiskContent />;
    case EDialogType.OLD_MAIN_OR_MPK_RISK:
      return <OldMainOrMpkRiskContent />;
    case EDialogType.ERROR:
      return <RiskPromptError />;
    default:
      return <NewSubRiskContent />;
  }
}
