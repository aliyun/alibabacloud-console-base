import React, {
  ChangeEvent,
  forwardRef,
  useCallback
} from 'react';
import styled, {
  css
} from 'styled-components';

import {
  useControllableValueSoftTrim
} from '@alicloud/react-hook-controllable-value';

import {
  TInputTextRef,
  IPropsInputText
} from '../../types';
import {
  CSS_FORM_CONTROL_INPUT_BASE
} from '../../const';

interface IScInput {
  block: 0 | 1;
}

const ScInputText = styled.input<IScInput>`
  min-width: 240px;
  max-width: 100%;
  ${CSS_FORM_CONTROL_INPUT_BASE}
  ${props => (props.block ? css`
    margin: 1px 0 1px 0;
    display: block;
    width: 100%;
  ` : null)}
`;

function InputText({
  block,
  value,
  defaultValue,
  onChange,
  ...props
}: IPropsInputText, ref: TInputTextRef): JSX.Element {
  const [controllableValue, controllableOnChange] = useControllableValueSoftTrim(true, value, defaultValue, onChange);
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    controllableOnChange(e.target.value);
  }, [controllableOnChange]);
  
  return <ScInputText {...{
    ...props,
    value: controllableValue,
    block: block ? 1 : 0,
    type: 'text',
    ref,
    onChange: handleChange
  }} />;
}

export default forwardRef(InputText);
