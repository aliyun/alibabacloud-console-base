import jsonStringifyOrdered from '@alicloud/json-stringify-ordered';

import {
  IFetcherConfig
} from '../types';

import buildUrl from './build-url';

function convertToString(o: unknown): string {
  if (!o) {
    return '';
  }
  
  if (typeof o === 'string') {
    return o;
  }
  
  return jsonStringifyOrdered(o);
}

function stringifyParam(o: unknown): string {
  const str = convertToString(o).replace(/"(\w+)":/, '$1:').replace(/"/g, '\'');
  
  return str === '{}' ? '' : str;
}

/**
 * 根据 config 中的相关数据创建一个 ID，类似 hash，可用于判断两个请求是否等价
 */
export default function generateConfigId({
  method,
  url = '',
  urlBase,
  params,
  body
}: IFetcherConfig): string {
  const parts: string[] = [
    `M_${method}`,
    `U_${buildUrl({ // 不要直接传整个 fetcherConfig
      url,
      urlBase,
      urlCacheBusting: false
    })}`
  ];
  const p = stringifyParam(params);
  const b = stringifyParam(body);
  
  if (p) {
    parts.push(`P_${p}`);
  }
  
  if (b) {
    parts.push(`B_${b}`);
  }
  
  return parts.join('!');
}
