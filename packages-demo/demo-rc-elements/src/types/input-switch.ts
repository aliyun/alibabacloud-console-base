import {
  ForwardedRef,
  ButtonHTMLAttributes
} from 'react';

export type TInputSwitchRef = ForwardedRef<HTMLButtonElement>;

export interface IInputSwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'value' | 'defaultValue' | 'aria-checked' | 'role' | 'onClick' | 'onChange'> {
  label?: string | JSX.Element;
  value?: boolean;
  defaultValue?: boolean;
  onChange?(value: boolean): void;
}
