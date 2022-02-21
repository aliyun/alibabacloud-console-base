import {
  HTMLAttributes
} from 'react';

import {
  ETooltipTheme,
  ETooltipPlacement
} from '../enum';

export interface IPropsCustom {
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
  /**
   * 将提供右上角 齿轮 按钮
   */
  onConfig?(): void;
  onVisibleChange?(visible: boolean): void;
}

export interface IPropsDom extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {}

export interface IModelProps extends IPropsCustom, IPropsDom {}