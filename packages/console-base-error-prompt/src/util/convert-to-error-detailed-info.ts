import _isString from 'lodash/isString';
import {
  isValidElement
} from 'react';

import {
  IErrorPlain,
  TErrorPromptArg
} from '../types';

/**
 * 把错误 `o: TErrorPromptArg` 转化成 IErrorDetailedInfo，这个方法会被暴露到外部
 */
export default function convertToErrorDetailedInfo(o: TErrorPromptArg): IErrorPlain {
  const info: IErrorPlain = {
    name: '',
    message: ''
  };
  
  if (_isString(o) || isValidElement(o)) {
    info.message = o as string;
  } else {
    info.name = o.name || info.name;
    info.requestId = o.requestId;
    info.code = o.code;
    info.title = o.title;
    info.message = o.message;
    info.stack = o.stack;
    info.details = o.details;
  }
  
  return info as IErrorPlain;
}
