import {
  HTMLAttributes
} from 'react';

import {
  EAlertTheme
} from '../enum';

export interface IPropsDom extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {}

export interface IPropsCustom {
  title?: string | JSX.Element;
  message?: string | JSX.Element;
  theme?: EAlertTheme;
  toast?: boolean;
  visible?: boolean;
  closable?: boolean;
  /**
   * 在 visible 之后自动开始倒计时关闭，单位秒，如果是 true 则用默认的 5s
   */
  autoClose?: boolean | number;
  onVisibleChange?(visible: boolean): void;
}

export interface IModelProps extends IPropsCustom, IPropsDom {}
