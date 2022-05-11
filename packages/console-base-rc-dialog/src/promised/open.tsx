import {
  EDialogMode
} from '../enum';
import {
  TDialogData,
  TStringOrJsx,
  IDialogProps
} from '../types';
import {
  buildPropsForPromise
} from '../util';

import openIndirect from './open-indirect';

interface IFnOpen {
  (content?: TStringOrJsx): Promise<void>;
  <T = void, D = TDialogData>(props: IDialogProps<T, D>): Promise<T>;
}

interface IFnOpenWithMode {
  (content?: TStringOrJsx): Promise<void>;
  <T = void, D = TDialogData>(props: Omit<IDialogProps<T, D>, 'mode'>): Promise<T>;
}

/**
 * 通过方法调用，你无需也不能再利用 onClose 关闭/销毁 Dialog，因为你有更棒的 Promise。
 *
 * @example
 *
 * ```typescript
 * // 只关心内容（没有按钮）
 * open(content).then(...);
 * open(<Content />).then(...);
 *
 * // 各种自定义：标题、内容、按钮...
 * open({
 *   title,
 *   content,
 *   buttons,
 *   ...
 * }).then(...);
 * ```
 */
const open: IFnOpen = function<T = void, D = TDialogData>(contentOrProps?: TStringOrJsx | IDialogProps<T, D>): Promise<T> {
  return openIndirect<T, D>(contentOrProps).promise;
};

export default open;

/**
 * open 的快捷方式：以抽屉模式打开一个 Dialog
 */
export const slide: IFnOpenWithMode = function<T = void, D = TDialogData>(contentOrProps?: TStringOrJsx | IDialogProps<T, D>): Promise<T> {
  return open<T, D>(buildPropsForPromise<T, D>(contentOrProps, {
    mode: EDialogMode.SLIDE
  }, {
    title: ' ' // force to have one
  }));
};

/**
 * open 的快捷方式：以抽屉模式打开一个 Dialog
 */
export const slideUp: IFnOpenWithMode = function<T = void, D = TDialogData>(contentOrProps?: TStringOrJsx | IDialogProps<T, D>): Promise<T> {
  return open<T, D>(buildPropsForPromise<T, D>(contentOrProps, {
    mode: EDialogMode.SLIDE_UP
  }));
};
