import {
  HTMLAttributes,
  AnchorHTMLAttributes
} from 'react';

export interface IPropsItem extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  label: string | JSX.Element;
}

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  items?: IPropsItem[];
}
