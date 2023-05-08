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
  arrow?: boolean;
  /**
   * 可在非居中 placement 的时候对箭头进行位置调整
   */
  arrowOffset?: number;
  visible?: boolean;
  defaultVisible?: boolean;
  /**
   * 将提供右上角 X 按钮
   */
  closable?: boolean;
  /**
   * 在 visible 之后自动开始倒计时关闭，单位秒，如果是 true 则用默认的 5s
   */
  autoClose?: boolean | number;
  /**
   * 当 autoCloseKey 发生变化时，可以重新倒计时
   */
  autoCloseKey?: string;
  /**
   * 是否展示自动关闭倒计时
   */
  autoCloseCounter?: boolean;
  /**
   * 将提供右上角 齿轮 按钮
   */
  onConfig?(): void;
  /**
   * closable 为 true 时，点击 X 的回调
   */
  onClose?(): void;
}

export interface IPropsDom extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'content'> {}

export interface IModelProps extends IPropsCustom, IPropsDom {}
