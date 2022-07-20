import {
  HTMLAttributes
} from 'react';

export interface IAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: string | JSX.Element;
  type?: 'help' | 'info' | 'success' | 'warning' | 'error';
}