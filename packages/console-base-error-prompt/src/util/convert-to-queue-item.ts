import _noop from 'lodash/noop';

import {
  TErrorPromptArg,
  IErrorQueueItem,
  IErrorPlain,
  IErrorPromptExtra,
  IFnErrorPromptExtra
} from '../types';
import {
  ERROR_NAMES_IGNORE_LIST,
  ERROR_CODE_EXTRA_MAPPING
} from '../const';
import intl from '../intl';

import convertToErrorDetailedInfo from './convert-to-error-detailed-info';

const defaultTitle = intl('title:normal');

function parseExtra(error: IErrorPlain, extra?: IErrorPromptExtra | IFnErrorPromptExtra): IErrorPromptExtra {
  return (typeof extra === 'function' ? extra(error) : extra) || {};
}

/**
 * 把错误 `o?: TErrorPromptArg` 转化成 IErrorQueueItem
 */
export default function convertToQueueItem(o?: TErrorPromptArg, extra?: IErrorPromptExtra | IFnErrorPromptExtra): IErrorQueueItem | null {
  if (!o) {
    return null;
  }
  
  const error = convertToErrorDetailedInfo(o);
  
  if (ERROR_NAMES_IGNORE_LIST.includes(error.name || '')) {
    return null;
  }
  
  let {
    title,
    button,
    message
  }: IErrorPromptExtra = parseExtra(error, extra);
  const specialExtra = error.code ? ERROR_CODE_EXTRA_MAPPING[error.code] : undefined;
  
  if (specialExtra) {
    title = specialExtra.title || title;
    button = specialExtra.button || button;
    message = specialExtra.message || message;
  }
  
  return {
    title: title || defaultTitle,
    message: message!,
    error,
    button,
    resolve: _noop // 由主方法负责填充成正式的 resolve 方法
  };
}
