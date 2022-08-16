import {
  ForwardedRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes
} from 'react';

interface IPropsFix {
  value?: string;
  defaultValue?: string;
  onChange?(value: string): void;
}

export type TInputTextRef = ForwardedRef<HTMLInputElement>;
export type TInputTextAreaRef = ForwardedRef<HTMLTextAreaElement>;

export interface IPropsInputText extends Omit<InputHTMLAttributes<HTMLInputElement>, keyof IPropsFix | 'children' | 'type'>, IPropsFix {
  block?: boolean;
}

export interface IPropsInputTextarea extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, keyof IPropsFix | 'children'>, IPropsFix {}