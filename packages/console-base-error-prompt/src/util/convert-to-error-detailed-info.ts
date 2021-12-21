import _isString from 'lodash/isString';
import {
  isValidElement
} from 'react';

import {
  IErrorDetails,
  IErrorPlain,
  TErrorPromptArg
} from '../types';

// fetcher 错误的一份缩影，不引用，是为了避免不不要的依赖
interface IErrorWithConfig {
  config?: {
    url?: string;
    method?: string;
    params?: string | Record<string, unknown> | null;
    body?: string | Record<string, unknown> | null;
  };
}

/**
 * 自动从 fetcher 的错误提取详细信息
 */
function getDetails(err?: IErrorWithConfig): IErrorDetails | undefined {
  if (!err?.config) {
    return;
  }
  
  return {
    url: err.config.url,
    method: err.config.method,
    params: err.config.params,
    body: err.config.body
  };
}

/**
 * 把错误 `error: TErrorPromptArg` 转化成 IErrorDetailedInfo，这个方法会被暴露到外部
 */
export default function convertToErrorDetailedInfo(error: TErrorPromptArg): IErrorPlain {
  const info: IErrorPlain = {
    name: '',
    message: ''
  };
  
  if (_isString(error) || isValidElement(error)) {
    info.message = error as string;
  } else {
    info.name = error.name || info.name;
    info.requestId = error.requestId;
    info.code = error.code;
    info.title = error.title;
    info.message = error.message;
    info.stack = error.stack;
    info.details = error.details || getDetails(error as IErrorWithConfig);
  }
  
  return info as IErrorPlain;
}
