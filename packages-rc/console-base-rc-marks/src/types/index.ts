import {
  HTMLAttributes
} from 'react';

export type TMarkType = 'NEW' | 'HOT' | 'UPDATE' | 'ALPHA' | 'BETA' | 'PUBLIC_BETA'; // 预设类型

export interface IPropsMark extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  hollow?: boolean;
  borderRadius?: boolean;
  align?: 'left' | 'center' | 'right';
  component?: 'sup' | 'sub' | 'span';
}

export interface IPropsMarkWithType extends IPropsMark {
  type: TMarkType;
}
