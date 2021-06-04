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
 * 标准化后的 IErrorDetailedInfo，纯对象，可以安全用于 postMessage 等场景，因为 Error 对象不可用在 postMessage 里边，会报错：
 * 
 * 「Uncaught DOMException: The object could not be cloned.」
 */
export interface IErrorDetailedInfo {
  code?: string;
  requestId?: string;
  title?: string;
  message?: string | ReactElement;
  // 请求相关
  url?: string;
  method?: string;
  params?: string | Record<string, unknown> | null;
  body?: string | Record<string, unknown> | null;
  // 实在没有可用的信息
  name?: string;
  stack?: string;
}

export interface IErrorWithDetails extends Error {
  details?: IErrorDetailedInfo;
}

export interface IErrorDialogData {
  page: number;
}

/**
 * errorPrompt 接收的第一个参数
 */
export type TErrorPromptArg = string | ReactElement | IErrorWithDetails | IErrorDetailedInfo;

/**
 * errorPrompt 第二个参数（对象形式），用于
 * 
 * 1. 添加自定义 button
 * 2. 覆盖 title 和 message
 * 
 * 但不能覆盖由 ERROR_CODE_EXTRA_MAPPING 指定的这部分信息
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
  <T extends IErrorDetailedInfo>(errInQueue: T): IErrorPromptExtra | void;
}

export interface IErrorInQueue extends Omit<IErrorDetailedInfo, 'body' | 'params'> {
  params?: Record<string, unknown> | null;
  body?: Record<string, unknown> | null;
}

export interface IErrorQueueItem extends RequiredBut<IErrorPromptExtra, 'button'> {
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

/**
 * 展示用的 k-v 对
 */
export interface IErrorDetailKV {
  k0: string;
  k: string;
  v: unknown;
}
