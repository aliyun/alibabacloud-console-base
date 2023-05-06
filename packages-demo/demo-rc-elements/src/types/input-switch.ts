import {
  ForwardedRef,
  ButtonHTMLAttributes
} from 'react';

import {
  IControllableValue
} from './common';

export type TInputSwitchRef = ForwardedRef<HTMLButtonElement>;

export interface IInputSwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof IControllableValue | 'children' | 'aria-checked' | 'role' | 'onClick'>, IControllableValue<boolean> {
  label?: string | JSX.Element;
}
