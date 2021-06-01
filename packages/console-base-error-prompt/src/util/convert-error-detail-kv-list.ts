import _forEach from 'lodash/forEach';
import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';
import _snakeCase from 'lodash/snakeCase';

import {
  IErrorInQueue,
  IErrorDetailKV
} from '../types';
import {
  ERROR_INTL_MAPPING,
  ERROR_ORDER
} from '../const';

/**
 * 把错误对象转成 `{k0, k, v}` 对象数组，保证某些字段的顺序
 */
export default function convertErrorDetailKvList(errorInQueue: IErrorInQueue): IErrorDetailKV[] {
  const kvList: IErrorDetailKV[] = [];
  
  _forEach(errorInQueue, (v, k): void => {
    if (k === 'message' || _isFunction(v) || _isNil(v) || v === '') {
      return;
    }
    
    const mappedKey = ERROR_INTL_MAPPING[k];
    
    if (!mappedKey && process.env.NODE_ENV !== 'development') {
      return;
    }
    
    kvList.push({
      k0: k,
      k: mappedKey || _snakeCase(k).toUpperCase(),
      v
    });
  });
  
  return kvList.sort((v1, v2) => {
    const order1 = ERROR_ORDER[v1.k0] || 100;
    const order2 = ERROR_ORDER[v2.k0] || 100;
    
    return order1 - order2;
  });
}
