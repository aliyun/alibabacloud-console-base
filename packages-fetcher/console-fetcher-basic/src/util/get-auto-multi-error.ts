import {
  IConsoleApiMultiError
} from '../types';

// 愚蠢的接口设计只能用愚蠢的判断
export default function getAutoMultiError(o: any): IConsoleApiMultiError | null { // eslint-disable-line
  /**
   * 唉，very 狗屎接口设计...一点都没有标准！！
   * 
   * 1. 有的没有 Code 表示成功，比如 ims 的接口，但错误一定有 Code 不等于 '200'
   * 2. 有的 Code === '200' 表示成功，比如 ConsoleBench
   * 3. 有的 Code === 200 表示成功，比如 hdmnext
   * 
   * 综上，所以判断有 Code 且不等于 '200' 为失败
   */
  if (!o?.Code || String(o.Code) === '200') {
    return null;
  }
  
  return o as IConsoleApiMultiError;
}
