import _noop from 'lodash/noop';

import {
  TErrorPromptArg,
  IErrorQueueItem,
  IErrorInQueue,
  IErrorPromptExtra,
  IFnErrorPromptExtra
} from '../types';
import {
  ERROR_NAMES_IGNORE_LIST,
  ERROR_CODE_EXTRA_MAPPING
} from '../const';
import intl from '../intl';

import convertToErrorInQueue from './convert-to-error-in-queue';

const defaultTitle = intl('title:normal');
const defaultButton = intl('op:close');

function parseExtra(error: IErrorInQueue, extra?: IErrorPromptExtra | IFnErrorPromptExtra): IErrorPromptExtra {
  return (typeof extra === 'function' ? extra(error) : extra) || {};
}

/**
 * 把错误 `o?: TErrorPromptArg` 转化成 IErrorQueueItem
 */
export default function convertToQueueItem(o?: TErrorPromptArg, extra?: IErrorPromptExtra | IFnErrorPromptExtra): IErrorQueueItem | null {
  const error = convertToErrorInQueue(o);
  
  if (!error || ERROR_NAMES_IGNORE_LIST.includes(error.name)) {
    return null;
  }
  
  let {
    title,
    button,
    message,
    buttonCancel
  }: IErrorPromptExtra = parseExtra(error, extra);
  const specialExtra = ERROR_CODE_EXTRA_MAPPING[error.code];
  
  if (specialExtra) {
    title = title || specialExtra.title;
    button = button || specialExtra.button;
    message = message || specialExtra.message;
    buttonCancel = buttonCancel || specialExtra.buttonCancel;
  }
  
  return {
    title: title || defaultTitle,
    message: message!,
    button,
    buttonCancel: buttonCancel || defaultButton,
    error,
    resolve: _noop // 由主方法负责填充成正式的 resolve 方法
  };
}
