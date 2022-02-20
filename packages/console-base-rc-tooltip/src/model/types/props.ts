import {
  HTMLAttributes
} from 'react';

import {
  RequiredSelected
} from '@alicloud/typescript-missing-helpers';

import {
  ETooltipTheme,
  ETooltipPlacement
} from '../enum';

/**
 * 提供标准化的操作按钮，如果有其他的需求，可能需要放在 content 里自己维护
 */
export interface IModelPropsEvents {
  /**
   * 将提供右上角 齿轮 按钮
   */
  onConfig?(): void;
  onVisibleChange?(visible: boolean): void;
}

export interface IModelProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, IModelPropsEvents {
  title?: string | JSX.Element;
  content: string | JSX.Element;
  theme?: ETooltipTheme;
  placement?: ETooltipPlacement;
  width?: number;
  arrow?: boolean;
  visible?: boolean;
  /**
   * 将提供右上角 X 按钮
   */
  closable?: boolean;
  /**
   * 在 visible 之后自动开始倒计时关闭，单位秒，如果是 true 则用默认的 5s
   */
  autoClose?: boolean | number;
}

export interface IModelPropsSafe extends RequiredSelected<Omit<IModelProps, 'autoClose'>, 'placement' | 'theme' | 'arrow'> {
  autoClose: number;
}