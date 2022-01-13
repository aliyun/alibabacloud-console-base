import {
  HTMLAttributes
} from 'react';

export interface IPropsInputSwitch extends Omit<HTMLAttributes<HTMLButtonElement>, 'value' | 'aria-checked' | 'role' | 'onClick' | 'onChange'> {
  value?: boolean;
  disabled?: boolean;
  onChange?(value: boolean): void;
}