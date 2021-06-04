import {
  ReactElement
} from 'react';

import {
  RequiredBut
} from '@alicloud/typescript-missing-helpers';
import {
  DialogIndirectPromise,
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

/**
 * 开发期间可以通过它展示更多的信息，同时它也是日志需要的重要信息，
 * 使用 fetcher 的话，不需要传，这里有处理的逻辑
 */
export interface IErrorDetails {
  url?: string;
  method?: string;
  params?: string | Record<string, unknown> | null;
  body?: string | Record<string, unknown> | null;
  [k: string]: unknown;
}

/**
 * 标准化后的纯对象，可以安全用于 postMessage 等场景，因为 Error 对象不可用在 postMessage 里边，会报错：
 * 
 * 「Uncaught DOMException: The object could not be cloned.」
 */
export interface IErrorPlain {
  name: string;
  requestId?: string;
  code?: string;
  title?: string;
  message: string;
  stack?: string;
  details?: IErrorDetails;
}

export interface IError extends Error, IErrorPlain {}

export interface IErrorDialogData {
  page: number;
}

/**
 * errorPrompt 接收的第一个参数
 */
export type TErrorPromptArg = string | ReactElement | IError | IErrorPlain;

/**
 * errorPrompt 第二个参数（对象形式），用于
 * 
 * 1. 添加自定义 button
 * 2. 覆盖 title 和 message
 * 
 * 但不能覆盖由 getPredefinedExtra 指定的这部分信息
 */
export interface IErrorPromptExtra {
  title?: string;
  message?: string | ReactElement;
  button?: string | DialogButtonProps<void, IErrorDialogData>;
}

/**
 * errorPrompt 第二个参数（函数形式）
 */
export interface IFnErrorPromptExtra {
  <T extends IErrorPlain>(errInQueue: T): IErrorPromptExtra | void;
}

export interface IErrorQueueItem extends RequiredBut<IErrorPromptExtra, 'button'> {
  error: IErrorPlain;
  resolve(): void;
}

/**
 * dialog openIndirect 需要用它来保存未完成的队列
 */
export interface IErrorPromptSolo {
  dialogIndirect: DialogIndirectPromise<void, IErrorDialogData> | null;
  queue: IErrorQueueItem[];
}

/**
 * 展示用的 k-v 对
 */
export interface IErrorDetailKV {
  k0: string;
  k: string;
  v: unknown;
}
