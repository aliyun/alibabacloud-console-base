import {
  HTMLAttributes
} from 'react';

import {
  ETooltipTheme,
  ETooltipPlacement
} from '../const';

/**
 * 提供标准化的操作按钮，如果有其他的需求，可能需要放在 content 里自己维护
 */
export interface IPropsRcTooltipEvents {
  /**
   * 将提供右上角 齿轮 按钮
   */
  onConfig?(): void;
  /**
   * 将提供右上角 X 按钮
   */
  onClose?(): void;
}

export interface IPropsRcTooltip extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, IPropsRcTooltipEvents {
  title?: string | JSX.Element;
  content: string | JSX.Element;
  theme?: ETooltipTheme;
  placement?: ETooltipPlacement;
  arrow?: boolean;
  width?: number;
  visible?: boolean;
}
