import React, {
  HTMLAttributes,
  ChangeEvent,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  InputText
} from '@alicloud/demo-rc-elements';

interface IPropsPartInput extends Omit<HTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?(value: number): void;
}

interface IPropsPart extends Omit<IPropsPartInput, 'placeholder' | 'step' | 'min' | 'max'> {
}

interface IPropsComplete extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string;
  onChange?(value: string): void;
}

const ScInputPart = styled(InputText)`
  width: 5em;
  text-align: center;
`;

const ScInputComplete = styled(InputText)`
  width: 12em;
  text-align: center;
`;

function PartInput({
  min = 0,
  max = 255,
  step = 1,
  value,
  onChange,
  ...props
}: IPropsPartInput): JSX.Element {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(Number(e.target.value) || min);
    }
  }, [min, onChange]);
  
  return <ScInputPart {...{
    min,
    max,
    step,
    value: value !== undefined ? `${value}` : undefined,
    ...props,
    type: 'number',
    onChange: handleChange
  }} />;
}

export function PartR(props: IPropsPart): JSX.Element {
  return <PartInput placeholder="r" {...props} />;
}

export function PartG(props: IPropsPart): JSX.Element {
  return <PartInput placeholder="g" {...props} />;
}

export function PartB(props: IPropsPart): JSX.Element {
  return <PartInput placeholder="b" {...props} />;
}

export function PartA(props: IPropsPart): JSX.Element {
  return <PartInput placeholder="a" step={0.1} max={1} {...props} />;
}

export function PartComplete({
  onChange,
  ...props
}: IPropsComplete): JSX.Element {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }, [onChange]);
  
  return <ScInputComplete placeholder="hex" {...props} onChange={handleChange} />;
}
