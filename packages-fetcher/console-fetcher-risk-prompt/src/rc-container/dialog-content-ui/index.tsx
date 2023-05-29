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
    // 新版主账号风控 UI
    case EDialogType.NEW_MAIN_RISK:
      return <NewMainRiskContent />;
    // 旧版主账号风控或 MPK 账号风控 UI
    case EDialogType.OLD_MAIN_OR_MPK_RISK:
      return <OldMainOrMpkRiskContent />;
    // RiskPrompt 流程发生错误时的 UI
    case EDialogType.ERROR:
      return <RiskPromptError />;
    // 新版子账号风控 UI
    default:
      return <NewSubRiskContent />;
  }
}
