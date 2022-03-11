import _isString from 'lodash/isString';
import {
  isValidElement
} from 'react';

import {
  IError,
  TErrorPromptArg
} from '../types';
import {
  ERROR_NAME_WILL_IGNORE
} from '../const';

// 需要忽略的 error 的 name 列表，硬编码，不想依赖 @alicloud/console-fetcher 的输出
const ERROR_NAMES_IGNORE_LIST = [
  ERROR_NAME_WILL_IGNORE,
  'FetcherErrorRiskForbidden',
  'FetcherErrorRiskInvalid',
  'FetcherErrorRiskCancelled'
];

/**
 * 是否直接忽略该错误
 */
export default function shouldIgnore(o?: TErrorPromptArg): o is undefined {
  if (!o) {
    return true;
  }
  
  if (_isString(o) || isValidElement(o)) {
    return false;
  }
  
  // 对象或 Error 实例
  const err: IError = o as IError;
  
  if (!err.message || !err.code) {
    return true;
  }
  
  const name: string = err.name || '';
  
  return ERROR_NAMES_IGNORE_LIST.includes(name);
}
