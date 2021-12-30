import React, {
  InputHTMLAttributes,
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback
} from 'react';
import styled from 'styled-components';

interface IPropsInputSwitch extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'type' | 'value' | 'defaultValue' | 'onChange'> {
  label?: string | JSX.Element;
  value?: boolean;
  defaultValue?: boolean;
  onChange?(value: boolean, e: ChangeEvent<HTMLInputElement>): void;
}

const ScInputSwitch = styled.label`
  display: inline-flex;
  align-items: center;
  line-height: 2;
  color: #777;
  transition: color 0.3s ease-in-out;
  
  input {
    margin: 0;
  }
  
  &:hover {
    color: #333;
  }
`;

const ScLabelText = styled.span`
  margin-left: 8px;
`;

function InputSwitch({
  label,
  value,
  defaultValue,
  onChange,
  ...props
}: IPropsInputSwitch, ref: Ref<HTMLInputElement>): JSX.Element {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked, e);
    }
  }, [onChange]);
  
  // TODO 搞个像样点的样式
  return <ScInputSwitch>
    <input {...{
      ...props,
      checked: value,
      defaultChecked: defaultValue,
      type: 'checkbox',
      ref,
      onChange: handleChange
    }} />
    {label ? <ScLabelText>{label}</ScLabelText> : null}
  </ScInputSwitch>;
}

export default forwardRef(InputSwitch);

export type {
  IPropsInputSwitch as InputSwitchProps
};
