import {
  IBizJson,
  TIsSuccess
} from '../types';

export default function isSuccess(json: IBizJson, successChecker?: TIsSuccess): boolean {
  if (typeof successChecker === 'boolean') {
    return successChecker;
  }
  
  if (typeof successChecker === 'function') {
    return successChecker(json);
  }
  
  return Number(json.code) === 200; // default，有些接口的 code 是数字，这边统一兼容一下吧
}
