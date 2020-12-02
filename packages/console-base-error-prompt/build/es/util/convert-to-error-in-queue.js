import _isString from 'lodash/isString';
import parseParams, { parseBody } from './parse-params';
import convertToErrorDetailedInfo from './convert-to-error-detailed-info';
/**
 * 把错误 `o?: TErrorPromptArg` 转化成 IErrorInQueue
 */

export default function convertToErrorInQueue(o) {
  var info = convertToErrorDetailedInfo(o);

  if (_isString(info.method)) {
    info.method = info.method.toUpperCase();
  }

  if (info.params) {
    info.params = parseParams(info.params);
  }

  if (info.body) {
    info.body = parseBody(info.body);
  }

  return info;
}