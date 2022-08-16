import {
  ForwardedRef,
  InputHTMLAttributes
} from 'react';

interface IPropsFix {
  value?: number;
  defaultValue?: number;
  onChange?(value: number): void;
}

export type TInputNumberRef = ForwardedRef<HTMLInputElement>;

export interface IPropsInputNumber extends Omit<InputHTMLAttributes<HTMLInputElement>, keyof IPropsFix | 'children' | 'type'>, IPropsFix {}