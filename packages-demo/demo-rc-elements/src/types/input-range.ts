import {
  ForwardedRef,
  InputHTMLAttributes
} from 'react';

import {
  IControllableValue
} from './common';

export type TInputRangeRef = ForwardedRef<HTMLInputElement>;

export interface IInputRangeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, keyof IControllableValue | 'children' | 'type'>, IControllableValue<number> {}
