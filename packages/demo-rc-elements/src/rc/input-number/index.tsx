import React, {
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  IPropsInputNumber
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

function string2number(s?: string): number | undefined {
  const n = Number(s);
  
  return isNaN(n) ? undefined : n;
}

function InputNumber({
  value,
  defaultValue,
  onChange,
  ...props
}: IPropsInputNumber, ref: Ref<HTMLInputElement>): JSX.Element {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(string2number(e.target.value), e);
  }, [onChange]);
  
  return <ScInputNumber {...{
    ...props,
    value: number2string(value),
    defaultValue: number2string(defaultValue),
    type: 'number',
    ref,
    onChange: handleChange
  }} />;
}

export default forwardRef(InputNumber);
