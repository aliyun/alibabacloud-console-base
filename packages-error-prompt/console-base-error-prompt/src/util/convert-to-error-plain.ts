import {
  isString as _isString
} from 'lodash-es';
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
    const {
      name, requestId, code, title, message, stack, details, detailsAuth
    } = error as IErrorPlain;

    o.name = name || o.name;
    o.requestId = requestId;
    o.code = code;
    o.title = title;
    o.message = message;
    o.stack = stack;
    o.details = details || getErrorDetails(error as IFetcherErrorMimic);
    o.detailsAuth = detailsAuth || getErrorDetailsAuth(error as IFetcherErrorMimic);
  }
  
  return o;
}
