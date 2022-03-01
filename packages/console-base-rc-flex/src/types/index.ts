import {
  HTMLAttributes
} from 'react';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean; // flex-direction
  wrapping?: boolean; // flex-wrap，HTMLAttributes 有 wrap，避讳
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

export interface IPropsItem extends HTMLAttributes<HTMLDivElement> {
  n?: number;
}