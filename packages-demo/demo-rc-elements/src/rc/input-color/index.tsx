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
  TInputColorRef,
  IInputColorProps
} from '../../types';
import {
  CSS_FORM_CONTROL_INPUT_BASE
} from '../../const';

const ScInputColor = styled.input`
  min-width: 80px;
  max-width: 100%;
  ${CSS_FORM_CONTROL_INPUT_BASE}
`;

function InputColor({
  value,
  defaultValue,
  onChange,
  ...props
}: IInputColorProps, ref: TInputColorRef): JSX.Element {
  const [controllableValue, controllableOnChange] = useControllable('#9900ff', value, defaultValue, onChange);
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    controllableOnChange(e.target.value);
  }, [controllableOnChange]);
  
  return <ScInputColor {...{
    ...props,
    value: controllableValue,
    type: 'color',
    ref,
    onChange: handleChange
  }} />;
}

export default forwardRef(InputColor);
