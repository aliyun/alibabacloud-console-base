import { IDialogProps, IDialogIndirectPromise, TStringOrJSX, TDialogData } from '../types';
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
export default function openIndirect<T = void, D = TDialogData>(contentOrProps?: TStringOrJSX | IDialogProps<T, D>): IDialogIndirectPromise<T, D>;
