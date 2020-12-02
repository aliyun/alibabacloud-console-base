import { FetcherConfig } from '@alicloud/fetcher';
/**
 * 判断当前请求是不是 fecs 的请求
 * 注意：「野生」即手写的 FECS 域名判断可能会出错，因为它可能不会像 @alicloud/console-base-conf-env 进行环境判断
 */
export default function isFecs({ url, urlBase }: FetcherConfig): boolean;
