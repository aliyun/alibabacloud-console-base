import {
  ReactNode,
  InputHTMLAttributes,
  MouseEvent,
  ChangeEvent
} from 'react';

export interface IPropsLook {
  theme?: 'normal' | 'brand';
  block?: boolean;
  round?: boolean;
  borderless?: boolean;
  /**
   * 默认的 focus 的样式比较重（主要是 border，用它可以弱化）
   */
  weakFocusStyle?: boolean;
  /**
   * 可通过控制 props.focused 让组件获得或失去焦点
   */
  focused?: boolean;
  /**
   * 加载状态，有 value 才展示
   */
  status?: 'loading' | 'success' | 'error';
  /**
   * 有 value 且 status 为空才展示
   */
  hasClear?: boolean;
}

export interface IPropsScInput extends IPropsLook {
  disabled?: boolean;
  hovered?: boolean;
}

export interface IModelProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onMouseEnter' | 'onMouseLeave' | 'onChange'>, IPropsLook {
  value?: string;
  defaultValue?: string;
  innerLeft?: string | JSX.Element;
  innerRight?: string | JSX.Element;
  /**
   * 是否执行软 trim，默认开启
   */
  trim?: boolean;
  onMouseEnter?(e: MouseEvent): void;
  onMouseLeave?(e: MouseEvent): void;
  onChange?(value: string, e?: ChangeEvent<HTMLInputElement>): void;
  /**
   * 可代替 onFocus/onBlur
   */
  onFocusedChange?(focused: boolean): void;
  /**
   * 可代替 onMouseEnter/onMouseLeave
   */
  onHoveredChange?(hovered: boolean): void;
}

export interface IModelProviderProps extends IModelProps {
  children?: ReactNode;
}
