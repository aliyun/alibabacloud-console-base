import {
  ReactElement
} from 'react';

import {
  RequiredBut
} from '@alicloud/typescript-missing-helpers';
import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IError,
  IErrorPlain
} from './error';
import {
  IErrorDialogData
} from './error-dialog';

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
  /**
   * 覆盖 error.title
   */
  title?: string;
  /**
   * 覆盖 error.message
   */
  message?: string | ReactElement;
  /**
   * 信息自定义区，对 message 进行补充
   */
  messageExtra?: string | ReactElement;
  button?: string | DialogButtonProps<void, IErrorDialogData>;
}

/**
 * errorPrompt 第二个参数（函数形式）
 */
export interface IFnErrorPromptExtra {
  <T extends IErrorPlain>(errInQueue: T): IErrorPromptExtra | void;
}

export type TErrorPromptArgExtra = IErrorPromptExtra | IFnErrorPromptExtra;

export interface IErrorQueueItem extends RequiredBut<IErrorPromptExtra, 'messageExtra' | 'button'> {
  error: IErrorPlain;
  detailedMode?: boolean;
  resolve(): void;
}