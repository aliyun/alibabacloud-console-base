import React, {
  HTMLAttributes,
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  CSS_INPUT_COMMON
} from '../const';

interface IPropsInputNumber extends Omit<HTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'onChange'> {
  value?: number;
  defaultValue?: number;
  onChange?(value: number | undefined, e: ChangeEvent<HTMLInputElement>): void;
}

const ScInputNumber = styled.input`
  ${CSS_INPUT_COMMON}
`;

function number2string(n?: number): string | undefined {
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
  const handleChangeEvent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(string2number(e.target.value), e);
    }
  }, [onChange]);
  
  return <ScInputNumber {...{
    ...props,
    value: number2string(value),
    defaultValue: number2string(defaultValue),
    type: 'number',
    ref,
    handleChangeEvent
  }} />;
}

export default forwardRef(InputNumber);
