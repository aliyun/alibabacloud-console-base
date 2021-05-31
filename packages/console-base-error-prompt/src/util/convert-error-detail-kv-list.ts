import _forEach from 'lodash/forEach';
import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';
import _snakeCase from 'lodash/snakeCase';

import {
  IErrorInQueue,
  IErrorDetailKV
} from '../types';
import intl from '../intl';

/**
 * 非开发环境下，仅展示这些信息，开发环境可以展示更多信息
 */
const PROP_NAME_MAPPING: Record<string, string> = {
  CODE: intl('attr:code'),
  REQUEST_ID: intl('attr:request_id')
};

/**
 * 保证字段排序
 */
const ORDER: Record<string, number> = {
  CODE: 1,
  REQUEST_ID: 2,
  URL: 3,
  METHOD: 4,
  PARAMS: 5,
  BODY: 6,
  ERROR_NAME: 7,
  STACK: 8
};

/**
 * 把错误对象转成 `{k0, k, v}` 对象数组，保证某些字段的顺序
 */
export default function convertErrorDetailKvList(errorInQueue: IErrorInQueue): IErrorDetailKV[] {
  const kvList: IErrorDetailKV[] = [];
  
  _forEach(errorInQueue, (v, k): void => {
    const displayKey = _snakeCase(k).toUpperCase();
    
    if (displayKey === 'MESSAGE' || _isFunction(v) || _isNil(v) || v === '') {
      return;
    }
    
    const mappedKey = PROP_NAME_MAPPING[displayKey];
    
    if (!mappedKey && process.env.NODE_ENV !== 'development') {
      return;
    }
    
    kvList.push({
      K0: displayKey,
      k: mappedKey || displayKey,
      v
    });
  });
  
  return kvList.sort((v1, v2) => {
    const order1 = ORDER[v1.K0] || 100;
    const order2 = ORDER[v2.K0] || 100;
    
    return order1 - order2;
  });
}
