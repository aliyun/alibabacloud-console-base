import {
  InputHTMLAttributes,
  MouseEvent,
  ChangeEvent
} from 'react';

export type TInner = string | JSX.Element;
export type TFnInner = (focused: boolean, hovered: boolean) => TInner;

export interface IPropsLook {
  theme?: 'normal' | 'brand';
  block?: boolean;
  round?: boolean;
  borderless?: boolean;
  /**
   * 默认的 focus 的样式比较重（主要是 border，用它可以弱化）
   */
  weakFocusStyle?: boolean;
  hasClear?: boolean;
  /**
   * 加载状态
   */
  state?: 'loading' | 'success' | 'error';
}

export interface IModelProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onMouseEnter' | 'onMouseLeave' | 'defaultValue' | 'onChange'>, IPropsLook {
  value?: string;
  defaultValue?: string;
  innerLeft?: TInner | TFnInner;
  innerRight?: TInner | TFnInner;
  onMouseEnter?(e: MouseEvent): void;
  onMouseLeave?(e: MouseEvent): void;
  onChange?(value: string, e?: ChangeEvent<HTMLInputElement>): void;
}

export interface IPropsScInput extends IPropsLook {
  disabled?: boolean;
  hovered: boolean;
  focused: boolean;
}
