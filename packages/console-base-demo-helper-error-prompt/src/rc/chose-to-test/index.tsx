import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  List,
  Hr,
  InputSwitch,
  CheckboxGroup,
  Button,
  PreJson
} from '@alicloud/demo-rc-elements';

import {
  IProps,
  TErrorArg
} from '../../types';
import {
  createErrors,
  renderErrorLabel
} from '../../util';

const ERRORS = createErrors();

export default function ChooseToTest({
  onPrompt
}: IProps): JSX.Element {
  const [stateErrors, setStateErrors] = useState<TErrorArg[]>([]);
  const [stateAutoClear, setStateAutoClear] = useState(true);
  const handleClear = useCallback(() => setStateErrors([]), [setStateErrors]);
  const handleAlertErrors = useCallback(() => {
    onPrompt(stateErrors);
    
    if (stateAutoClear) {
      handleClear();
    }
  }, [stateErrors, stateAutoClear, onPrompt, handleClear]);
  
  return <>
    <H1>选择错误，模拟单个或多个错误的场景</H1>
    <List>
      <><code>undefined / null</code> 空字符串、空对象以及空 <code>Error</code> 对象会被忽略</>
      <>JSX 无法通过 <code>postMessage</code> 传递（因此不会被 proxy）</>
    </List>
    <CheckboxGroup<TErrorArg> {...{
      items: ERRORS.map(v => ({
        label: renderErrorLabel(v),
        value: v
      })),
      value: stateErrors,
      onChange: setStateErrors
    }} />
    <Hr />
    <Button {...{
      disabled: !stateErrors.length,
      onClick: handleAlertErrors
    }}>ErrorPrompt ({stateErrors.length})</Button>
    <Button {...{
      disabled: !stateErrors.length,
      onClick: handleClear
    }}>清除</Button>
    <InputSwitch {...{
      label: '自动清除',
      value: stateAutoClear,
      onChange: setStateAutoClear
    }} />
    <PreJson o={stateErrors} />
  </>;
}
