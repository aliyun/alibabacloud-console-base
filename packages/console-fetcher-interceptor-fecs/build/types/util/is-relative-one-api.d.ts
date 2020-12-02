import { FetcherConfig } from '@alicloud/fetcher';
/**
 * 判断是否为 OneConsole 封装的 API 请求（请求的是当前域名下的相对地址）
 */
export default function isRelativeOneApi({ url, urlBase }: FetcherConfig): boolean;
