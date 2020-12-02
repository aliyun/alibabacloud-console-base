import {
  HTMLAttributes,
  ReactNode
} from 'react';

export interface IItem {
  key?: string;
  k: string | JSX.Element;
  v: ReactNode;
  col?: 1 | 2 | 3;
  vertical?: boolean;
}

export type TItems = {
  [k: string]: ReactNode;
} | (IItem | null)[];

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  o: TItems;
  ignoreEmpty?: boolean; // 是否展示的时候去掉空的 value 项
  wrapValue?: boolean; // 是否允许内容折行
}
