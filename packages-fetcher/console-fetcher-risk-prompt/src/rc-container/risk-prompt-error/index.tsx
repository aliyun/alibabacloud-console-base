import React, {
  useEffect
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  ESceneKey,
  EUnexpectedErrorType
} from '../../enum';
import {
  useModelProps
} from '../../model';
import AltWrap from '../../rc/alt-wrap';

// RiskPrompt 运行时发生错误提示 UI（例如子账号未绑定核身设备却触发了弹窗，或者是解析 riskResponse 时发生错误）
export default function RiskPromptError(): JSX.Element {
  const {
    data: {
      errorMessageObject
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();
  const errorMessage = errorMessageObject[ESceneKey.RISK_PROMPT_ERROR];

  const {
    setRiskCanceledErrorProps
  } = useModelProps();

  // 通过 setRiskCanceledErrorProps 来设置非预期错误类型和错误信息，错误信息会被埋点上报
  useEffect(() => {
    setRiskCanceledErrorProps({
      unexpectedErrorMessage: errorMessage,
      unexpectedErrorType: EUnexpectedErrorType.RISK_PROMPT_ERROR
    });
  }, [setRiskCanceledErrorProps, errorMessage]);

  return (
    <AltWrap content={errorMessage} />
  );
}