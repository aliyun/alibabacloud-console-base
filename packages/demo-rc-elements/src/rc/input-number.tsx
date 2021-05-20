import React, {
  InputHTMLAttributes,
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback
} from 'react';

import {
  InputBase
} from './_form-control-base';

interface IPropsInputNumber extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'onChange'> {
  value?: number;
  defaultValue?: number;
  onChange?(value: number | undefined, e: ChangeEvent<HTMLInputElement>): void;
}

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
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(string2number(e.target.value), e);
    }
  }, [onChange]);
  
  return <InputBase {...{
    ...props,
    value: number2string(value),
    defaultValue: number2string(defaultValue),
    type: 'number',
    ref,
    onChange: handleChange
  }} />;
}

export default forwardRef(InputNumber);
