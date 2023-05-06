import React, {
  ChangeEvent,
  forwardRef,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  useControllable
} from '@alicloud/react-hook-controllable';

import {
  TInputNumberRef,
  IInputNumberProps
} from '../../types';
import {
  CSS_FORM_CONTROL_INPUT_BASE
} from '../../const';
import {
  fromNumberToString,
  fromStringToNumber
} from '../../util';

const ScInputNumber = styled.input`
  min-width: 120px;
  max-width: 100%;
  ${CSS_FORM_CONTROL_INPUT_BASE}
`;

function InputNumber({
  value,
  defaultValue,
  onChange,
  ...props
}: IInputNumberProps, ref: TInputNumberRef): JSX.Element {
  const [controllableValue, controllableOnChange] = useControllable<number>(0, value, defaultValue, onChange);
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    controllableOnChange(fromStringToNumber(e.target.value));
  }, [controllableOnChange]);
  
  return <ScInputNumber {...{
    ...props,
    value: fromNumberToString(controllableValue),
    type: 'number',
    onChange: handleChange
  }} ref={ref} />;
}

export default forwardRef(InputNumber);
