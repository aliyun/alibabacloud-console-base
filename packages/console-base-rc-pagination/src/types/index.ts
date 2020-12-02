import {
  HTMLAttributes
} from 'react';

export interface IPropsPagination extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  page?: number;
  pageSize?: number;
  total?: number;
  align?: 'left' | 'center' | 'right';
  theme?: 'simplest' | 'simple';
  hideWhenOne?: boolean;
  onChange?(p: number): void;
}
