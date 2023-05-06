import {
  ForwardedRef,
  InputHTMLAttributes
} from 'react';

import {
  IControllableValue
} from './common';

export type TInputColorRef = ForwardedRef<HTMLInputElement>;

export interface IInputColorProps extends Omit<InputHTMLAttributes<HTMLInputElement>, keyof IControllableValue | 'children' | 'type'>, IControllableValue {}
