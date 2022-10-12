import {
  HTMLAttributes
} from 'react';

export interface IPropsInputSwitch extends Omit<HTMLAttributes<HTMLSpanElement>, 'value' | 'defaultValue' | 'aria-checked' | 'role' | 'onClick' | 'onChange'> {
  label?: string | JSX.Element;
  value?: boolean;
  defaultValue?: boolean;
  disabled?: boolean;
  onChange?(value: boolean): void;
}