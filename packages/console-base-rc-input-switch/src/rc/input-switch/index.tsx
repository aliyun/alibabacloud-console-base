import React, {
  useState,
  useCallback
} from 'react';
import styled, {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinBgWhite,
  mixinBgHelp,
  mixinBgSuccess,
  mixinBgDisabled,
  mixinShadowSDown
} from '@alicloud/console-base-theme';
import {
  ButtonBase
} from '@alicloud/console-base-theme-sc-base';

import {
  IPropsInputSwitch
} from '../../types';
import {
  WIDTH_SWITCH,
  HEIGHT_SWITCH,
  SPACING_INNER,
  SIZE_KNOB
} from '../../const';

interface IScProps {
  'aria-checked': boolean;
  disabled?: boolean;
}

function getBg(props: IScProps): FlattenSimpleInterpolation {
  if (props.disabled) {
    return mixinBgDisabled;
  }
  
  return props['aria-checked'] ? mixinBgSuccess : mixinBgHelp; // TODO 更好的定义
}

function getKnobPosition(props: IScProps): FlattenSimpleInterpolation {
  return props['aria-checked'] ? css`
    left: 100%;
    transform: translateX(-100%);
  ` : css`
    left: 0;
  `;
}

const ScInputSwitchWrap = styled.span`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
`;

const ScInputSwitch = styled(ButtonBase)<IScProps>`
  position: relative;
  border: ${SPACING_INNER}px solid transparent;
  border-radius: ${HEIGHT_SWITCH}px;
  width: ${WIDTH_SWITCH}px;
  height: ${HEIGHT_SWITCH}px;
  ${getBg}
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    border-radius: 50%;
    width: ${SIZE_KNOB}px;
    height: ${SIZE_KNOB}px;
    transition: all linear 160ms;
    ${mixinBgWhite}
    ${mixinShadowSDown}
    ${getKnobPosition}
  }
`;

const ScInputSwitchLabel = styled.label`
  margin-left: 8px;
`;

export default function InputSwitch({
  label,
  value,
  disabled,
  onChange,
  ...props
}: IPropsInputSwitch): JSX.Element {
  const [stateValue, setStateValue] = useState<boolean>(false);
  const finalValue = value ?? stateValue;
  
  const handleClick = useCallback(() => {
    const nextValue = !finalValue;
    
    setStateValue(nextValue);
    onChange?.(nextValue);
  }, [onChange, finalValue, setStateValue]);
  
  return <ScInputSwitchWrap {...props}>
    <ScInputSwitch {...{
      disabled,
      role: 'switch',
      'aria-checked': finalValue,
      onClick: handleClick
    }} />
    {label ? <ScInputSwitchLabel onClick={disabled ? undefined : handleClick}>{label}</ScInputSwitchLabel> : null}
  </ScInputSwitchWrap>;
}