import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinBgWhite,
  mixinShadowSDown
} from '@alicloud/console-base-theme';
import {
  ButtonBase
} from '@alicloud/console-base-theme-sc-base';
import {
  useControllable
} from '@alicloud/react-hook-controllable';

import {
  IPropsInputSwitch
} from '../../types';
import {
  WIDTH_SWITCH,
  HEIGHT_SWITCH,
  SPACING_INNER,
  SIZE_KNOB
} from '../../const';
import {
  getStyledBg,
  getStyledKnobPosition
} from '../../util';

interface IScProps {
  'aria-checked': boolean;
  disabled?: boolean;
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
  ${getStyledBg}
  
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
    ${getStyledKnobPosition}
  }
`;

const ScInputSwitchLabel = styled.label`
  margin-left: 8px;
`;

export default function InputSwitch({
  label,
  value,
  defaultValue,
  disabled,
  onChange,
  ...props
}: IPropsInputSwitch): JSX.Element {
  const [controllableValue, setControllableValue] = useControllable(false, value, defaultValue, onChange);
  const handleClick = useCallback(() => setControllableValue(!controllableValue), [controllableValue, setControllableValue]);
  
  return <ScInputSwitchWrap {...props}>
    <ScInputSwitch {...{
      disabled,
      role: 'switch',
      'aria-checked': controllableValue,
      onClick: handleClick
    }} />
    {label ? <ScInputSwitchLabel onClick={disabled ? undefined : handleClick}>{label}</ScInputSwitchLabel> : null}
  </ScInputSwitchWrap>;
}