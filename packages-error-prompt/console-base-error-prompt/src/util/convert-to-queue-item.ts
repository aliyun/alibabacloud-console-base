import {
  noop as _noop
} from 'lodash-es';

import {
  TErrorPromptArg,
  IErrorQueueItem,
  IErrorPlain,
  IErrorPromptExtra,
  IFnErrorPromptExtra
} from '../types';
import intl from '../intl';

import shouldIgnore from './should-ignore';
import convertToErrorPlain from './convert-to-error-plain';
import getPredefinedExtra from './get-predefined-extra';

const defaultTitle = intl('title:normal');

function parseExtra(error: IErrorPlain, extra?: IErrorPromptExtra | IFnErrorPromptExtra): IErrorPromptExtra {
  return (typeof extra === 'function' ? extra(error) : extra) || {};
}

/**
 * 把错误 `o?: TErrorPromptArg` 和 extra 合并转化成 IErrorQueueItem
 */
export default function convertToQueueItem(o?: TErrorPromptArg, extra?: IErrorPromptExtra | IFnErrorPromptExtra, detailedMode?: boolean): IErrorQueueItem | null {
  if (shouldIgnore(o)) {
    return null;
  }
  
  const error = convertToErrorPlain(o);
  const predefinedExtra = getPredefinedExtra(error.code);
  let {
    title = error.title,
    message = error.message,
    messageExtra,
    button
  } = parseExtra(error, extra);
  
  if (predefinedExtra) {
    title = predefinedExtra.title || title;
    message = predefinedExtra.message || message;
    messageExtra = predefinedExtra.messageExtra || messageExtra;
    button = predefinedExtra.button || button;
  }
  
  return {
    error,
    title: title || defaultTitle,
    message,
    messageExtra,
    button,
    detailedMode,
    resolve: _noop // 由主方法负责填充成正式的 resolve 方法
  };
}
