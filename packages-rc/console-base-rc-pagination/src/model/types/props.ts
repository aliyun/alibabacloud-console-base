import {
  IPropsOnDom,
  TAlign,
  TTheme
} from './common';

export interface IModelProps extends IPropsOnDom {
  total?: number;
  page?: number;
  pageSize?: number;
  theme?: TTheme;
  align?: TAlign;
  hideWhenOne?: boolean;
  /**
   * 非 simplest 模式下，隐藏「上一页」「下一页」的文字，仅展示方向箭头
   */
  noText?: boolean;
  /**
   * 有的场景，不能按照传入的 total 进行分页计算，因为...可能所有后端有缺陷，比如 OpenSearch，
   * 据说超过 5000 后返回不出来，但返回的 total 却超过 5000
   */
  totalLimit?: number;
  /**
   * 页码显示的数量限制，更多的使用 `...` 代替，默认 5
   */
  maxPageButton?: number;
  onChange?(n: number): void;
}
