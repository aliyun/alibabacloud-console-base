import {
  ERROR_NAME_WILL_IGNORE
} from '../const';

/**
 * 有些场景下，错误已经在业务层被处理，不希望被 error-prompt 弹窗，但又不想或不能或不应该 throw null 什么的，
 * 可以利用此帮助方法继续 throw 一个错误，这个错误一定会被 error-prompt 忽略（虽然会被接收到）
 */
export default function createErrorToIgnore(): Error {
  const err = new Error();
  
  err.name = ERROR_NAME_WILL_IGNORE; // 已经可以不需要了 但还是放着吧 无伤大雅
  
  return err;
}
