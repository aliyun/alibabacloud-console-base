import {
  DialogMode,
  DialogProps
} from '@alicloud/console-base-rc-dialog-core';

import {
  buildPropsForPromise
} from '../util';

import openIndirect from './open-indirect';

interface IFnOpen {
  (content?: string | JSX.Element): Promise<void>;
  <T = void, D extends object = Record<string, unknown>>(props: DialogProps<T, D>): Promise<T>;
}

interface IFnOpenWithMode {
  (content?: string | JSX.Element): Promise<void>;
  <T = void, D extends object = Record<string, unknown>>(props: Omit<DialogProps<T, D>, 'mode'>): Promise<T>;
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
export const open: IFnOpen = function<T = void, D extends object = Record<string, unknown>>(contentOrProps?: string | JSX.Element | DialogProps<T, D>): Promise<T> {
  return openIndirect<T, D>(contentOrProps).promise;
};

/**
 * open 的快捷方式：以抽屉模式打开一个 Dialog
 */
export const slide: IFnOpenWithMode = function<T = void, D extends object = Record<string, unknown>>(contentOrProps?: string | JSX.Element | DialogProps<T, D>): Promise<T> {
  return open<T, D>(buildPropsForPromise<T, D>(contentOrProps, {
    mode: DialogMode.SLIDE
  }, {
    title: ' ' // force to have one
  }));
};

/**
 * open 的快捷方式：以抽屉模式打开一个 Dialog
 */
export const slideUp: IFnOpenWithMode = function<T = void, D extends object = Record<string, unknown>>(contentOrProps?: string | JSX.Element | DialogProps<T, D>): Promise<T> {
  return open<T, D>(buildPropsForPromise<T, D>(contentOrProps, {
    mode: DialogMode.SLIDE_UP
  }));
};
