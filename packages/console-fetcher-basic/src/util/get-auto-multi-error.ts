import {
  IConsoleApiMultiError
} from '../types';

// 愚蠢的接口设计只能用愚蠢的判断
export default function getAutoMultiError(o: any): IConsoleApiMultiError | null { // eslint-disable-line
  /**
   * 唉，very 狗屎接口设计...一点都没有标准！！
   * 
   * 有的接口返回没有 Code 是成功，比如 ims 的接口，但错误一定有 Code 不等于 '200'
   * 有的 Code === '200' 是成功...，比如 ConsoleBench
   * 所以判断有 Code 且不等于 '200' 为失败
   */
  if (!o?.Code || o.Code === '200') {
    return null;
  }
  
  return o as IConsoleApiMultiError;
}
