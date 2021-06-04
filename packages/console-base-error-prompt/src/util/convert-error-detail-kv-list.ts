import _forEach from 'lodash/forEach';
import _isFunction from 'lodash/isFunction';
import _snakeCase from 'lodash/snakeCase';

import {
  IErrorPlain,
  IErrorDetailKV
} from '../types';
import intl from '../intl';

import parseParams from './parse-params';

/**
 * 把错误对象转成 `{k0, k, v}` 对象数组，保证某些字段的顺序
 */
export default function convertErrorDetailKvList(error: IErrorPlain): IErrorDetailKV[] {
  const kvList: IErrorDetailKV[] = [];
  
  function pushInfo(v: unknown, k0: string, k: string): void {
    if (!v || _isFunction(v)) {
      return;
    }
    
    kvList.push({
      k0,
      k,
      v
    });
  }
  
  pushInfo(error.code, 'code', intl('attr:code'));
  pushInfo(error.requestId, 'requestId', intl('attr:request_id'));
  
  // 仅在开发模式下展示的信息
  if (process.env.NODE_ENV === 'development') {
    // 详情仅在开发模式下，对 details.params 和 details.body 有良好的展示
    _forEach(error.details, (v, k) => {
      pushInfo(k === 'params' || k === 'body' ? parseParams(v) : v, `detail.${k}`, _snakeCase(k).toUpperCase());
    });
    
    // 实在没有可用信息的话，很可能是运行时错误，需要给开发一些醍醐灌顶..
    if (!kvList.length) {
      pushInfo(error.name, 'name', 'NAME');
      pushInfo(error.stack, 'stack', 'STACK');
    }
  }
  
  return kvList;
}
