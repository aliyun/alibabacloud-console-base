import _noop from 'lodash/noop';
import React from 'react';
import {
  render,
  unmountComponentAtNode
} from 'react-dom';

import {
  IDialogProps,
  IDialogIndirectPromise,
  TStringOrJsx,
  TDialogData
} from '../types';
import {
  buildPropsForPromise
} from '../util';
import WithProvider from '../rc-container';

/**
 * 所有 Promise 化的 dialog 的基础。
 * 
 * 一般来说你不需要用到这个方法，当希望外部代码可以在 Dialog 生成之后对 Dialog 进行重新渲染（主要是渲染内容），可以用它。
 * 返回一个对象，该对象包含 `renderUpdate` 和 `promise`，你可以利用 `renderUpdate` 对 Dialog 进行重新渲染，需要注意的是，
 * 你必须在 promise 的 `then` 里关注 Dialog 是否被关闭。
 * 这种情况下，这个 `promise` 一般不会被直接返回使用，而是作为一系列 Promise 对象的触发器。
 * 
 * @example
 * 
 * ```typescript
 * interface IQueueItem {
 *   resolve(result: any): void;
 *   reject(err: Error): void;
 * }
 * 
 * const queue: IQueueItem[] = [];
 * let soloDialogResult = null;
 * 
 * ...
 * 
 * const somePromise: Promise<void> = new Promise((resolve, reject) => {
 *   queue.push({
 *     resolve,
 *     reject
 *   });
 * });
 * 
 * if (soloDialogResult) { // 保证关闭之前只能调用一次
 *   // do something ...
 *   
 *   return somePromise;
 * }
 * 
 * soloDialogResult = open(true, props);
 *
 * soloDialogResult.promise.then(result => {
 *   queue.forEach(v => v.resolve(result);
 * }, err => {
 *   queue.forEach(v => v.reject(err);
 * }).then(() => {
 *   queue.length = 0;
 *   
 *   soloDialogResult = null;
 * });
 * 
 * return somePromise;
 * ```
 */
export default function openIndirect<T = void, D = TDialogData>(contentOrProps?: TStringOrJsx | IDialogProps<T, D>): IDialogIndirectPromise<T, D> {
  let dialogProps: IDialogProps<T, D> | null = buildPropsForPromise<T, D>(contentOrProps);
  let holder: HTMLDivElement | null = document.createElement('div'); // 只是一个 gateway 真实的 Dialog 并不会被渲染到它里边
  let close: ((result?: T, rejected?: boolean) => void) | null = _noop;
  
  document.body.appendChild(holder!);
  
  function renderDialog(props: IDialogProps<T, D>): void {
    render(<WithProvider {...props} />, holder);
  }
  
  function renderUpdate(updatedProps: Partial<IDialogProps<T, D>>): void {
    if (!updatedProps || !dialogProps) {
      return;
    }
    
    // 不可有以下新属性进行覆盖
    delete updatedProps.onClose;
  
    dialogProps = { // 更新当前内存中的 props 对象
      ...dialogProps,
      ...updatedProps
    };
    
    renderDialog(dialogProps);
  }
  
  const promise = new Promise<T>((resolve, reject) => {
    /**
     * Dialog 被关闭是会执行到此回调，这里会将 Promise 进行 resolve 或 reject，同时做一系列的清理动作
     */
    close = (result?: T | Error, rejected?: boolean) => {
      if (!holder || !holder.parentElement) {
        return;
      }
      
      unmountComponentAtNode(holder);
      holder.parentElement.removeChild(holder);
      
      if (rejected) {
        reject(result);
      } else {
        resolve(result as T);
      }
      
      // 防止内存泄漏
      dialogProps = null;
      holder = null;
      close = null;
    };
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dialogProps!.onClose = close;
    
    renderDialog(dialogProps!);
  });
  
  return {
    renderUpdate,
    close,
    promise
  };
}
