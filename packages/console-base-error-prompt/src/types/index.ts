import {
  ReactElement
} from 'react';

import {
  DialogIndirectPromise,
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

export interface IErrorDetails {
  code?: string;
  requestId?: string;
  url?: string;
  method?: string;
  params?: string | Record<string, unknown> | null;
  body?: string | Record<string, unknown> | null;
  [k: string]: unknown;
}

/**
 * 标准化后的 IErrorDetailedInfo，纯对象，可以安全用于 postMessage 等场景，因为 Error 对象不可用在 postMessage 里边，会报错：
 * 
 * 「Uncaught DOMException: The object could not be cloned.」
 */
export interface IErrorDetailedInfo extends IErrorDetails {
  message?: string | ReactElement;
}

export interface IErrorWithDetails extends Error {
  details?: IErrorDetails;
}

export interface IErrorDialogData {
  page: number;
}

/**
 * errorPrompt 接收的第一个参数
 */
export type TErrorPromptArg = string | ReactElement | IErrorWithDetails | IErrorDetailedInfo;

/**
 * errorPrompt 第二个参数（对象形式），用于自定义 title 和 button
 */
export interface IErrorPromptExtra {
  title?: string;
  message?: string | ReactElement;
  button?: string | DialogButtonProps<void, IErrorDialogData>;
  buttonCancel?: string | DialogButtonProps<void, IErrorDialogData>;
}

/**
 * errorPrompt 第二个参数（函数形式），用于自定义 title 和 button
 */
export interface IFnErrorPromptExtra {
  <T extends IErrorDetailedInfo>(errInQueue: T): IErrorPromptExtra | void;
}

export interface IErrorInQueue extends Omit<IErrorDetailedInfo, 'body' | 'params'> {
  params?: Record<string, unknown> | null;
  body?: Record<string, unknown> | null;
}

export interface IErrorQueueItem extends Required<IErrorPromptExtra> {
  error: IErrorInQueue;
  resolve(): void;
}

/**
 * dialog openIndirect 需要用它来保存未完成的队列
 */
export interface IErrorPromptSolo {
  dialogIndirect: DialogIndirectPromise<void, IErrorDialogData> | null;
  queue: IErrorQueueItem[];
}
