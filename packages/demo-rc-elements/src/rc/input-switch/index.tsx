import React, {
  ButtonHTMLAttributes,
  useState,
  useCallback
} from 'react';
import styled, {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

interface IPropsInputSwitch extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'defaultValue' | 'aria-checked' | 'role' | 'onClick' | 'onChange'> {
  label?: string | JSX.Element;
  value?: boolean;
  defaultValue?: boolean;
  onChange?(value: boolean): void;
}

const HEIGHT_SWITCH = 18;
const WIDTH_SWITCH = HEIGHT_SWITCH * 2 - 4;
const SPACING_INNER = 2;
const SIZE_KNOB = HEIGHT_SWITCH - SPACING_INNER * 2;

interface IScProps {
  'aria-checked': boolean;
  disabled?: boolean;
}

function getBgColor(props: IScProps): string {
  if (props.disabled) {
    return '#ccc';
  }
  
  return props['aria-checked'] ? '#090' : '#369';
}

function getKnowPosition(props: IScProps): FlattenSimpleInterpolation {
  return props['aria-checked'] ? css`
    left: 100%;
    transform: translateX(-100%);
  ` : css`
    left: 0;
  `;
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
  background-color: ${getBgColor};
  width: ${WIDTH_SWITCH}px;
  height: ${HEIGHT_SWITCH}px;
  line-height: 2;
  cursor: pointer;
  
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
    ${getKnowPosition}
  }
`;

const ScInputSwitchLabel = styled.label`
  margin-left: 8px;
  color: #777;
`;

export default function InputSwitch({
  value,
  defaultValue = false,
  label,
  disabled,
  onChange,
  ...props
}: IPropsInputSwitch): JSX.Element {
  const [stateValue, setStateValue] = useState<boolean>(defaultValue);
  const finalValue = value ?? stateValue;
  
  const handleClick = useCallback(() => {
    const nextValue = !finalValue;
    
    setStateValue(nextValue);
    
    if (onChange) {
      onChange(nextValue);
    }
  }, [onChange, finalValue, setStateValue]);
  
  return <ScInputSwitch>
    <ScInputSwitchButton {...{
      ...props,
      disabled,
      role: 'switch',
      'aria-checked': finalValue,
      onClick: handleClick
    }} />
    {label ? <ScInputSwitchLabel onClick={disabled ? undefined : handleClick}>{label}</ScInputSwitchLabel> : null}
  </ScInputSwitch>;
}

export type {
  IPropsInputSwitch as InputSwitchProps
};

