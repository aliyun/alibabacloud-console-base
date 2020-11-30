import _isString from 'lodash/isString';
import _isError from 'lodash/isError';
import {
  isValidElement
} from 'react';

import {
  IErrorDetailedInfo,
  TErrorPromptArg,
  IErrorWithDetails
} from '../types';

function convertToErrorInQueueFromError(e: Error): IErrorDetailedInfo {
  const {
    details
  } = e as IErrorWithDetails;
  const errorInQueue: IErrorDetailedInfo = {
    message: e.message,
    ...details
  };
  
  if (!details) { // 如果没有详情 则尽可能拿更多的信息
    errorInQueue.errorName = e.name;
    errorInQueue.stack = e.stack;
  }
  
  return errorInQueue;
}

/**
 * 把错误 `o?: TErrorPromptArg` 转化成 IErrorDetailedInfo，这个方法会被暴露到外部
 */
export default function convertToErrorDetailedInfo(o: TErrorPromptArg): IErrorDetailedInfo {
  if (_isString(o) || isValidElement(o)) {
    return {
      message: o
    };
  }
  
  return _isError(o) ? convertToErrorInQueueFromError(o) : o;
}
