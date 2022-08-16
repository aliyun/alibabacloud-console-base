import React, {
  forwardRef,
  useCallback
} from 'react';
import styled from 'styled-components';

import useControllableValue from '@alicloud/react-hook-controllable-value';

import {
  TInputSwitchRef,
  IInputSwitchProps
} from '../../types';
import {
  HEIGHT_SWITCH,
  WIDTH_SWITCH,
  SPACING_INNER,
  SIZE_KNOB
} from '../../const';
import {
  getStyledSwitchBg,
  getStyledSwitchKnobPosition
} from '../../util';

interface IScProps {
  'aria-checked': boolean;
  disabled?: boolean;
}

const ScInputSwitch = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 12px;
  
  &:last-child {
    margin-right: 0;
  }
`;

const ScInputSwitchButton = styled.button<IScProps>`
  position: relative;
  border: ${SPACING_INNER}px solid transparent;
  border-radius: ${HEIGHT_SWITCH}px;
  width: ${WIDTH_SWITCH}px;
  height: ${HEIGHT_SWITCH}px;
  line-height: 2;
  cursor: pointer;
  ${getStyledSwitchBg}
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    border-radius: 50%;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
    background-color: #fff;
    width: ${SIZE_KNOB}px;
    height: ${SIZE_KNOB}px;
    transition: all linear 160ms;
    ${getStyledSwitchKnobPosition}
  }
`;

const ScInputSwitchLabel = styled.label`
  margin-left: 8px;
`;

function InputSwitch({
  value,
  defaultValue = false,
  label,
  disabled,
  onChange,
  ...props
}: IInputSwitchProps, ref: TInputSwitchRef): JSX.Element {
  const [controllableValue, controllableOnChange] = useControllableValue<boolean>(false, value, defaultValue, onChange);
  const handleClick = useCallback(() => controllableOnChange(!controllableValue), [controllableValue, controllableOnChange]);
  
  return <ScInputSwitch>
    <ScInputSwitchButton {...{
      ref,
      ...props,
      disabled,
      role: 'switch',
      'aria-checked': controllableValue,
      onClick: handleClick
    }} />
    {label ? <ScInputSwitchLabel onClick={disabled ? undefined : handleClick}>{label}</ScInputSwitchLabel> : null}
  </ScInputSwitch>;
}

export default forwardRef(InputSwitch);