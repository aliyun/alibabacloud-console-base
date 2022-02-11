import {
  HTMLAttributes
} from 'react';

export interface IPropsOnDom extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {}

export type TAlign = 'left' | 'center' | 'right';
export type TTheme = 'full' | 'simple' | 'simplest';
export type TPage = number | '...';