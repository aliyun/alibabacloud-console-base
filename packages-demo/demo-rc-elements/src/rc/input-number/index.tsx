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

const ScInputNumber = styled.input`
  min-width: 120px;
  max-width: 100%;
  ${CSS_FORM_CONTROL_INPUT_BASE}
`;

function number2string(n?: number | string): string | undefined {
  if (typeof n === 'undefined') {
    return undefined;
  }
  
  return typeof n === 'number' ? n.toString() : '';
}

function string2number(s?: string): number {
  const n = Number(s);
  
  return isNaN(n) ? 0 : n;
}

function InputNumber({
  value,
  defaultValue,
  onChange,
  ...props
}: IInputNumberProps, ref: TInputNumberRef): JSX.Element {
  const [controllableValue, controllableOnChange] = useControllable<number>(0, value, defaultValue, onChange);
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    controllableOnChange(string2number(e.target.value));
  }, [controllableOnChange]);
  
  return <ScInputNumber {...{
    ...props,
    value: number2string(controllableValue),
    type: 'number',
    ref,
    onChange: handleChange
  }} />;
}

export default forwardRef(InputNumber);
