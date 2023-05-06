import {
  ForwardedRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes
} from 'react';

import {
  IControllableValue
} from './common';

export type TInputTextRef = ForwardedRef<HTMLInputElement>;
export type TInputTextAreaRef = ForwardedRef<HTMLTextAreaElement>;

export interface IInputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, keyof IControllableValue | 'children' | 'type'>, IControllableValue {
  block?: boolean;
}

export interface IInputTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, keyof IControllableValue | 'children'>, IControllableValue {}
