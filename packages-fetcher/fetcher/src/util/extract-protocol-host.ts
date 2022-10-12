import {
  IFetcherConfig
} from '../types';

import getProtocolAndHost from './get-protocol-and-host';

/**
 * 该请求的 protocol 和 host，可用于判断是否跨域
 */
export default function extractProtocolHost({
  url,
  urlBase
}: IFetcherConfig): [string, string] | null {
  return getProtocolAndHost(url) || getProtocolAndHost(urlBase);
}
