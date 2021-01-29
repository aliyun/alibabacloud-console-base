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
  const str = convertToString(o).replace(/"/g, '\'');
  
  return str === '{}' ? '' : str;
}

export default function generateConfigId({
  method,
  url = '',
  urlBase,
  params,
  body
}: IFetcherConfig): string {
  const parts: string[] = [
    `M_${method}`,
    `U_${buildUrl(url, {
      urlBase
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
