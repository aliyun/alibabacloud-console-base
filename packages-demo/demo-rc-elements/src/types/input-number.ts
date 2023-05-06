import {
  ForwardedRef,
  InputHTMLAttributes
} from 'react';

import {
  IControllableValue
} from './common';

export type TInputNumberRef = ForwardedRef<HTMLInputElement>;

export interface IInputNumberProps extends Omit<InputHTMLAttributes<HTMLInputElement>, keyof IControllableValue | 'children' | 'type'>, IControllableValue<number> {}
