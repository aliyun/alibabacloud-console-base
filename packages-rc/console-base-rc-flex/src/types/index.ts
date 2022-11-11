import {
  HTMLAttributes
} from 'react';

export interface IPropsFlex extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean; // flex-direction
  wrapping?: boolean; // flex-wrap，HTMLAttributes 有 wrap，避讳
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * 将添加 `flex: 1;`
   */
  flex?: boolean;
}

export interface IPropsItem extends HTMLAttributes<HTMLDivElement> {
  n?: number;
  ellipsis?: boolean;
}