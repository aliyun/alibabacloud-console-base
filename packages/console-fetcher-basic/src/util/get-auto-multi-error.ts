import {
  IConsoleApiMultiError
} from '../types';

// 愚蠢的接口设计只能用愚蠢的判断
export default function getAutoMultiError(o: any): IConsoleApiMultiError | null { // eslint-disable-line
  if (o && o.Code && typeof o.Code === 'string') { // 唉，very 狗屎接口设计...
    return o as IConsoleApiMultiError;
  }
  
  return null;
}
