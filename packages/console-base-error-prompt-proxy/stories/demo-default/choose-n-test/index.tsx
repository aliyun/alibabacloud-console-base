import React, {
  useState,
  useCallback
} from 'react';

import {
  H2,
  CheckboxGroup,
  Button
} from '@alicloud/demo-rc-elements';

import {
  ErrorDetailedInfo
} from '../../../src';
import {
  alertError,
  ERRORS
} from '../_common';

export default function ChooseNTest(): JSX.Element {
  const [stateErrors, setStateErrors] = useState<ErrorDetailedInfo[]>([]);
  const handleClear = useCallback(() => setStateErrors([]), [setStateErrors]);
  const handleAlertErrors = useCallback(() => stateErrors.forEach(alertError), [stateErrors]);
  
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
        onClick: handleAlertErrors
      }}>alertError</Button>
      <Button {...{
        onClick: handleClear
      }}>clear</Button>
    </div>
  </>;
}
