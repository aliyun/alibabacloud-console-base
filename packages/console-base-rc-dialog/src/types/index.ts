import {
  HTMLAttributes,
  MouseEvent
} from 'react';

import {
  ButtonProps
} from '@alicloud/console-base-rc-button';

import {
  EDialogMode,
  EDialogSize
} from '../const';

export type TStringOrJSX = string | JSX.Element;

export type TDialogData = Record<string, unknown>;

/**
 * 标题、按钮等可以根据 dialogData 进行动态控制
 */
export type TDynamicByData<T = void, D = TDialogData> = T | ((dialogData: D) => T);

/**
 * button.onClick 方法定义，可以返回 false 阻止 Dialog 关闭（默认行为是点击后关闭）
 */
export type TFnButtonOnClick<T = void, D = TDialogData> = (dialog: IContextForContent<T, D>, e: MouseEvent<HTMLElement>) => boolean | void;

/**
 * Dialog props.onClose 方法定义，value 的类型为 Promise resolve 的类型
 */
export type TFnDialogOnClose<T = void> = (result?: T | Error, rejected?: boolean) => void;

export type TFnCloseWithResult<T = void> = (result?: T | Error, rejected?: boolean) => void;

export type TDispatchLock = (loading?: boolean) => void;

export type TDispatchUpdateProps<T = void, D = TDialogData> = (propsUpdates: Partial<IDialogPropsMutable<T, D>>) => void;

export type TDispatchUpdateData<D = TDialogData> = (dataUpdates: Partial<D>) => void;

// 给内容使用的 context
export interface IContextForContent<T = void, D = TDialogData> {
  data: D;
  focus(): void;
  resetScrollTop(): void;
  unlock(): void;
  lock: TDispatchLock;
  update: TDispatchUpdateProps<T, D>;
  updateData: TDispatchUpdateData<D>;
  close: TFnCloseWithResult<T>;
}

export interface IDialogButtonProps<T = void, D = TDialogData> extends Omit<ButtonProps, 'spm' | 'onClick'> {
  // 覆盖 spm 参数，Dialog 会做默认填充，不强制传入
  spm?: string;
  // 是否使用主按钮，一般情况下 Dialog 都会自动判断，不需要传
  primary?: boolean;
  // 点击该按钮的时候，对 Promise value 产生的效果
  result?: TDynamicByData<T, D>;
  // 覆盖
  onClick?: TFnButtonOnClick<T, D>;
}

export type TDialogButton<T = void, D = TDialogData> = TStringOrJSX | IDialogButtonProps<T, D>;

/**
 * Dialog props 定义
 */
export interface IDialogProps<T = void, D = TDialogData> extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /* --- 内容 --- */
  title?: TDynamicByData<TStringOrJSX, D>;
  buttons?: TDynamicByData<TDialogButton<T, D>[], D>;
  content?: TStringOrJSX;
  /* --- 展示 --- */
  mode?: EDialogMode | 'normal' | 'slide';
  size?: number | EDialogSize | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'auto' | 'almost-full' | 'full';
  classNameOnBody?: string;
  /* --- 行为 --- */
  backdrop?: boolean; // 是否需要背投
  closable?: boolean; // 显示关闭按钮
  esc?: boolean | number; // 键盘的 ESC，当 closable = false 时，若要启用此功能，则必须为 -1
  externalClose?: boolean | number; // 外部点击是否关闭当前 dialog，当 closable = false 时，若要启用此功能，则必须为 -1
  zIndex?: number; // Dialog 本体的 zIndex
  zIndexBackdrop?: number; // 背投的 zIndex，必须比 zIndex 小
  /* --- 数据 --- */
  data?: D;
  undefinedAsReject?: boolean;
  /* --- 事件 --- */
  onClose?: TFnDialogOnClose<T>; // 执行关闭后发生（然而，真正的从 DOM 上移除还是必须要使用者自行处理）
}

/**
 * 可以由内容组件控制并调整的 props，除了 content 之外，几乎所有都可以修改
 */
export interface IDialogPropsMutable<T = void, D = TDialogData> extends Omit<IDialogProps<T, D>, 'content' | 'data'> {}

/**
 * 用于 alert/confirm/prompt 的 props
 */
export type TDialogPropsForAlts<T = void, D = TDialogData> = Omit<IDialogProps<T, D>, 'content' | 'buttons' | 'mode' | 'backdrop' | 'esc' | 'zIndex' | 'zIndexBackdrop'>;

export interface IDialogPropsAlert extends Omit<TDialogPropsForAlts, 'data'> {
  title?: TStringOrJSX;
  content: TStringOrJSX;
}

export interface IDialogPropsConfirm extends Omit<TDialogPropsForAlts<boolean>, 'data'> {
  title?: TStringOrJSX;
  content: TStringOrJSX;
}

export interface IDialogPropsPrompt<D = TDialogData> extends TDialogPropsForAlts<string, D> {
  title?: TStringOrJSX;
}

export interface IDialogIndirectPromise<T = void, D = TDialogData> {
  renderUpdate(changedProps: Partial<IDialogProps<T, D>>): void;
  close(result?: T | Error, rejected?: boolean): void;
  promise: Promise<T>;
}

export interface IAlertExtra {
  /**
   * 自定义按钮文字
   */
  ok?: string;
  /**
   * 图标选择
   */
  type?: 'alert' | 'info' | 'success' | 'error';
}

export interface IConfirmExtra {
  ok?: string;
  cancel?: string;
}

export interface IPromptExtra extends IConfirmExtra {}
