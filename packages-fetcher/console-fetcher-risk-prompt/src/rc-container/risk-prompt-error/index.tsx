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