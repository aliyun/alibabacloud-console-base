import {
  HTMLAttributes
} from 'react';

export interface IPropsRating extends Omit<HTMLAttributes<HTMLSpanElement>, 'value' | 'defaultValue' | 'role' | 'onChange'> {
  // 0-5
  value?: number;
  defaultValue?: number;
  onChange?(value: number): void;
}