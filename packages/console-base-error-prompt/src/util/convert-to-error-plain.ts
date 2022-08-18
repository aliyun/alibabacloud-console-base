import _isString from 'lodash/isString';
import {
  isValidElement
} from 'react';

import {
  IErrorPlain,
  IFetcherErrorMimic,
  TErrorPromptArg
} from '../types';

import getErrorDetails from './get-error-details';
import getErrorDetailsAuth from './get-error-details-auth';

/**
 * 把错误 `error: TErrorPromptArg` 转化成 IErrorDetailedInfo，这个方法会被暴露到外部
 */
export default function convertToErrorPlain(error: TErrorPromptArg): IErrorPlain {
  const o: IErrorPlain = {
    name: '',
    message: ''
  };
  
  if (_isString(error) || isValidElement(error)) {
    o.message = error as string;
  } else {
    o.name = error.name || o.name;
    o.requestId = error.requestId;
    o.code = error.code;
    o.title = error.title;
    o.message = error.message;
    o.stack = error.stack;
    o.details = error.details || getErrorDetails(error as IFetcherErrorMimic);
    o.detailsAuth = error.detailsAuth || getErrorDetailsAuth(error as IFetcherErrorMimic);
  }
  
  return o;
}
