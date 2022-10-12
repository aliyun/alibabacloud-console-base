import {
  HTMLAttributes
} from 'react';

export interface IProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  label?: string | JSX.Element;
}
