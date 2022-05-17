import {
  HTMLAttributes,
  ReactNode
} from 'react';

export interface IItemResolved {
  key?: string;
  k: string | JSX.Element;
  v: ReactNode;
}

export type TItems = {
  [k: string]: ReactNode;
} | (IItemResolved | null)[];

export interface IPropsKeyValue extends HTMLAttributes<HTMLDivElement> {
  o: TItems;
  horizontal?: boolean;
  // 是否展示的时候去掉空的 value 项
  ignoreEmpty?: boolean;
  // 是否允许内容折行
  wrapValue?: boolean;
}
