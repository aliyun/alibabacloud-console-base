import {
  InputHTMLAttributes,
  ChangeEvent
} from 'react';

export type TInner = string | JSX.Element;
export type TFnInner = (focused: boolean, hovered: boolean) => TInner;

export interface IPropsLook {
  block?: boolean;
  round?: boolean;
  borderless?: boolean;
  /**
   * 默认的 focus 的样式比较中（主要是 border，用它可以弱化）
   */
  weakFocusStyle?: boolean;
}

export interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onMouseEnter' | 'onMouseLeave' | 'onChange'>, IPropsLook {
  innerLeft?: TInner | TFnInner;
  innerRight?: TInner | TFnInner;
  onMouseEnter?(): void;
  onMouseLeave?(): void;
  onChange?(value: string, e?: ChangeEvent<HTMLInputElement>): void;
}
