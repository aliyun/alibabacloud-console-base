import {
  FetcherUtils
} from '@alicloud/fetcher';
import jsonStringifyOrdered from '@alicloud/json-stringify-ordered';

import {
  IFetcherConfigExtended
} from '../../types';

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

export default function cacheGenerateKey({
  method,
  url,
  urlBase,
  params,
  body
}: IFetcherConfigExtended): string {
  return [
    `M_${method}`,
    `U_${FetcherUtils.buildUrl(url, {
      urlBase
    })}`,
    `P_${stringifyParam(params)}`,
    `B_${stringifyParam(body)}`
  ].join('!');
}
