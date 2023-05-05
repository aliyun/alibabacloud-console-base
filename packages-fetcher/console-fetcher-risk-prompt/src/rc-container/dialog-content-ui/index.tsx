import React from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  EDialogType,
  ESceneKey
} from '../../enum';
import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import AltWrap from '../../rc/alt-wrap';
import NewSubRiskContent from '../new-sub-risk-content';
import NewMainRiskContent from '../new-main-risk-content';
import OldMainOrMpkRiskContent from '../old-main-or-mpk-risk-content';

export default function DialogContentUi(): JSX.Element {
  const {
    data: {
      dialogType,
      errorMessageObject
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  switch (dialogType) {
    case EDialogType.NEW_MAIN_RISK:
      return <NewMainRiskContent />;
    case EDialogType.OLD_MAIN_OR_MPK_RISK:
      return <OldMainOrMpkRiskContent />;
    case EDialogType.ERROR:
      return <AltWrap content={errorMessageObject[ESceneKey.RISK_PROMPT_ERROR]} />;
    default:
      return <NewSubRiskContent />;
  }
}
