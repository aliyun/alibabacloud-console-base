import {
  IPropsOnDom
} from './common';

export interface IModelProps extends IPropsOnDom {
  total?: number;
  page?: number;
  pageSize?: number;
  align?: 'left' | 'center' | 'right';
  theme?: 'full' | 'simple' | 'simplest';
  /**
   * 页码显示的数量限制，更多的使用 `...` 代替，默认 5 
   */
  limit?: number;
  hideWhenOne?: boolean;
  onChange?(p: number): void;
}
