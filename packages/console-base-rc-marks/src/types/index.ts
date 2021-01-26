import {
  EMarkType
} from '../const';

export interface IPropsMark {
  align?: 'left' | 'center' | 'right';
  component?: 'sup' | 'sub' | 'span';
}

export interface IPropsMarkWithType extends IPropsMark {
  type: EMarkType;
}
