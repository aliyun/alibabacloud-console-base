import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  List,
  Hr,
  CheckboxGroup,
  Button,
  PreJson
} from '@alicloud/demo-rc-elements';

import {
  IProps,
  TErrorArg
} from '../../types';
import renderErrorLabel from '../../util/render-error-label';
import createErrors from '../../util/create-errors';

const ERRORS = createErrors();

export default function ChooseNTest({
  onPrompt
}: IProps): JSX.Element {
  const [stateErrors, setStateErrors] = useState<TErrorArg[]>([]);
  const handleClear = useCallback(() => setStateErrors([]), [setStateErrors]);
  const handleAlertErrors = useCallback(() => {
    stateErrors.forEach(onPrompt);
    handleClear();
  }, [onPrompt, stateErrors, handleClear]);
  
  return <>
    <H1>选择错误，模拟单个或多个错误的场景</H1>
    <List>
      <><code>undefined / null</code> 会被忽略</>
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
    }}>error prompt ({stateErrors.length})</Button>
    <Button {...{
      disabled: !stateErrors.length,
      onClick: handleClear
    }}>clear</Button>
    <PreJson o={stateErrors} />
  </>;
}
