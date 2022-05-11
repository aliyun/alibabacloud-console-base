import {
  HTMLAttributes
} from 'react';

import {
  EMarkType
} from '../enum';

export interface IPropsMark extends HTMLAttributes<HTMLSpanElement> {
  hollow?: boolean;
  align?: 'left' | 'center' | 'right';
  component?: 'sup' | 'sub' | 'span';
}

export interface IPropsMarkWithType extends IPropsMark {
  type: EMarkType;
}
