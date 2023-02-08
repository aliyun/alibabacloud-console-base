import React from 'react';
import styled from 'styled-components';

import {
  InputText,
  InputNumber,
  InputTextProps,
  InputNumberProps
} from '@alicloud/demo-rc-elements';

const ScInputPart = styled(InputNumber)`
  width: 6em;
  text-align: center;
`;

const ScInputComplete = styled(InputText)`
  width: 14em;
  text-align: center;
`;

function PartInput({
  min = 0,
  max = 255,
  step = 1,
  ...props
}: InputNumberProps): JSX.Element {
  return <ScInputPart {...{
    min,
    max,
    step,
    ...props
  }} />;
}

export function PartR(props: InputNumberProps): JSX.Element {
  return <PartInput placeholder="r" {...props} />;
}

export function PartG(props: InputNumberProps): JSX.Element {
  return <PartInput placeholder="g" {...props} />;
}

export function PartB(props: InputNumberProps): JSX.Element {
  return <PartInput placeholder="b" {...props} />;
}

export function PartA(props: InputNumberProps): JSX.Element {
  return <PartInput {...{
    ...props,
    placeholder: 'a',
    step: 0.1,
    max: 1
  }} />;
}

export function PartComplete(props: InputTextProps): JSX.Element {
  return <ScInputComplete placeholder="hex" {...props} />;
}
