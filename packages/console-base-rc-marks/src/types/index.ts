import {
  HTMLAttributes
} from 'react';

import {
  EMarkType
} from '../const';

export interface IPropsMark extends HTMLAttributes<HTMLSpanElement> {
  align?: 'left' | 'center' | 'right';
  component?: 'sup' | 'sub' | 'span';
}

export interface IPropsMarkWithType extends IPropsMark {
  type: EMarkType;
}
