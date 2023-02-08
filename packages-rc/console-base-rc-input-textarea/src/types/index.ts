import {
  HTMLAttributes
} from 'react';

export interface IInputTextareaProps extends Omit<HTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  /**
   * 默认启用软 trim
   */
  softTrim?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?(value: string): void;
}