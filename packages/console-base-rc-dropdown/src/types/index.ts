export type TBodyPadding = 'both' | 'top' | 'bottom' | 'none';

export interface IPropsTheDrop {
  header?: string | JSX.Element;
  body?: string | JSX.Element;
  footer?: string | JSX.Element;
  align?: 'left' | 'right';
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  zIndex?: number;
  offset?: [number, number];
  bodyPadding?: TBodyPadding;
  dropContainer?: 'inside' | 'body';
}

export interface IPropsDropdown extends IPropsTheDrop {
  trigger: string | JSX.Element;
  block?: boolean; // 默认为 inline-block
  disabled?: boolean;
  visible?: boolean; // 下拉是否可见（受控），如果 undefined 则表明不受控
  onEsc?(): void;
  onNavUp?(): void;
  onNavDown?(): void;
  onVisibleChange?(value: boolean): void;
}
