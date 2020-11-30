import _noop from 'lodash/noop';
import _isNil from 'lodash/isNil';

import {
  TErrorPromptArg,
  IErrorPromptArgExtra,
  IErrorQueueItem
} from '../types';

import convertToErrorInQueue from './convert-to-error-in-queue';

/**
 * 把错误 `o?: TErrorPromptArg` 转化成 IErrorQueueItem
 */
export default function convertToErrorQueueItem(o?: TErrorPromptArg, extra?: IErrorPromptArgExtra): IErrorQueueItem | null {
  if (_isNil(o)) {
    return null;
  }
  
  return {
    ...extra,
    error: convertToErrorInQueue(o),
    resolve: _noop
  };
}
