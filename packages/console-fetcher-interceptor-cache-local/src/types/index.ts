import {
  FetcherConfig
} from '@alicloud/fetcher';

export interface ICache<T = unknown> {
  expire: number;
  data: T;
}

export interface ICacheLocalOptions {
  /**
   * 默认会根据 method + url + params + body 的方式做 key，你也可以指定专属的 key
   */
  key?: string;
  /**
   * 本地缓存的生存时间，一旦超过会重新请求
   */
  ttl?: number;
  /**
   * 如果已经有本地缓存，且未失效，指定此参数将重新请求，并在成功之后重置缓存
   * 注意：连续调用此类接口没有意义，跟不设 cacheLocal 一样，建议在修改数据后重新获取数据时
   */
  invalidateOld?: boolean;
}

export interface IFetcherConfigExtra {
  // fetch 已经有一个 cache 了
  cacheLocal?: null | boolean | ICacheLocalOptions;
}

export interface IFetcherConfigExtended extends FetcherConfig, IFetcherConfigExtra {}

/**
 * request 里会把 cacheLocal 局限成 null | ICacheLocalOptions
 */
export interface IFetcherConfigExtendedForResponseFulfilled extends FetcherConfig {
  cacheLocal?: null | ICacheLocalOptions;
}
