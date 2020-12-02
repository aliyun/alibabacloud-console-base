import { IDialogPropsAlert, IDialogPropsConfirm, IDialogPropsPrompt } from '../types';
import { IDataPrompt } from './prompt-content';
interface IExtraOk {
    ok?: string;
}
interface IExtraOkCancel {
    ok?: string;
    cancel?: string;
}
/**
 * 系统 window.alert 的替代
 *
 * ```typescript
 * alert('some message').then(...);
 * alert(<Content />).then(...);
 * alert({
 *   title: 'some title',
 *   content: 'message',
 * }, {
 *   ok: 自定义 OK 按钮文案
 * }).then(...);
 *
 * // 也可以用 async-await
 * await alert(...);
 * ```
 */
export declare function alert(contentOrProps: string | JSX.Element | IDialogPropsAlert, extra?: IExtraOk): Promise<void>;
/**
 * 系统 window.confirm 的替代
 *
 * ```
 * import {
 *   confirm
 * } from '@alicloud/console-base-rc-dialog';
 *
 * confirm(...).then(yes => {
 *   ...
 * });
 *
 * // 也可以用 async-await
 * const yes = await alert(...);
 * ```
 */
export declare function confirm(contentOrProps?: string | JSX.Element | IDialogPropsConfirm, extra?: IExtraOkCancel): Promise<boolean>;
/**
 * 系统 window.prompt 的替代
 */
export declare function prompt(props?: IDialogPropsPrompt<IDataPrompt>, extra?: IExtraOkCancel): Promise<string>;
export {};
