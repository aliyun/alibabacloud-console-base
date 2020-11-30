import React, {
  useState,
  useCallback
} from 'react';

import {
  H2,
  CheckboxGroup,
  Button
} from '@alicloud/demo-rc-elements';

import errorPrompt, {
  ErrorDetailedInfo
} from '../../../src';
import {
  ERRORS
} from '../_const';

export default function ChooseNTest(): JSX.Element {
  const [stateErrors, setStateErrors] = useState<ErrorDetailedInfo[]>([]);
  const handleClear = useCallback(() => setStateErrors([]), [setStateErrors]);
  const handleAlertErrors = useCallback(() => stateErrors.forEach(v => errorPrompt(v)), [stateErrors]);
  
  return <>
    <H2>选择错误，模拟单个或多个错误的场景</H2>
    <CheckboxGroup<ErrorDetailedInfo> {...{
      items: ERRORS.map(v => ({
        label: v.message || v.toString(),
        value: v
      })),
      value: stateErrors,
      onChange: setStateErrors
    }} />
    <div>
      <Button {...{
        onClick: handleClear
      }}>clear</Button>
      <Button {...{
        onClick: handleAlertErrors
      }}>errorPrompt</Button>
    </div>
  </>;
}
