import {
  HTMLAttributes
} from 'react';

export interface IPropsOnDom extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {}

export type TPage = number | '...';