import _noop from 'lodash/noop';

import {
  TErrorPromptArg,
  IErrorQueueItem,
  IErrorPlain,
  IErrorPromptExtra,
  IFnErrorPromptExtra
} from '../types';
import intl from '../intl';

import shouldIgnore from './should-ignore';
import convertToErrorDetailedInfo from './convert-to-error-detailed-info';
import getPredefinedExtra from './get-predefined-extra';

const defaultTitle = intl('title:normal');

function parseExtra(error: IErrorPlain, extra?: IErrorPromptExtra | IFnErrorPromptExtra): IErrorPromptExtra {
  return (typeof extra === 'function' ? extra(error) : extra) || {};
}

/**
 * 把错误 `o?: TErrorPromptArg` 转化成 IErrorQueueItem
 */
export default function convertToQueueItem(o?: TErrorPromptArg, extra?: IErrorPromptExtra | IFnErrorPromptExtra): IErrorQueueItem | null {
  if (shouldIgnore(o)) {
    return null;
  }
  
  const error = convertToErrorDetailedInfo(o);
  const specialExtra = getPredefinedExtra(error.code);
  let {
    title = error.title,
    message = error.message,
    button
  }: IErrorPromptExtra = parseExtra(error, extra);
  
  if (specialExtra) {
    title = specialExtra.title || title;
    message = specialExtra.message || message;
    button = specialExtra.button || button;
  }
  
  return {
    title: title || defaultTitle,
    message,
    error,
    button,
    resolve: _noop // 由主方法负责填充成正式的 resolve 方法
  };
}
