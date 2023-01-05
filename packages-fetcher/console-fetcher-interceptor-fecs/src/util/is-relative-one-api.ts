import {
  FetcherConfig
} from '@alicloud/fetcher';

const ONE_APIS = [ // 这里有点弱冗余
  '/data/api.json',
  '/data/innerApi.json',
  '/data/call.json',
  '/data/multiApi.json',
  '/data/v2/multiApi.json'
];

/**
 * 判断是否为 OneConsole 封装的 API 请求（请求的是当前域名下的相对地址）
 */
export default function isRelativeOneApi({
  url = '',
  urlBase
}: FetcherConfig): boolean {
  return !urlBase && ONE_APIS.includes(url);
}
