@alicloud/fetcher-interceptor-cache-local
===

> `@alicloud/fetcher` 的本地缓存拦截器

发送请求的时候判断时候已存在缓存数据，如果存在则直接返回；如果存在正在发送的相同请求，也直接返回一个 promise（会被正在发送的请求 resolve 或 reject）。

它主要是请求拦截器，但也会拦截响应（为了获取数据），所以顺序上需要放在对响应数据提取的拦截器之后。

# 新增 config

```typescript
interface ICacheLocalOptions {
  /**
   * 默认用 FetcherConfig._id，也可以自己指定（不推荐自己指定）
   */
  key?: string;
  /**
   * 本地缓存的生存时间（单位 ms），一旦超过会重新请求，一般建议不小于 10000，即 10s
   * 如果 ttl > 0，但已有的缓存是无生存时间的，则一定会请求
   */
  ttl?: number;
  /**
   * 如果已经有本地缓存，且未失效，指定此参数将重置缓存且重新请求
   * 注意：连续调用此类接口没有意义，跟不设 cacheLocal 一样，建议在修改数据后重新获取数据时
   */
  overwrite?: boolean;
}

interface IFetcherConfigExtra {
  /**
   * 是否做本地缓存，必须手动指定
   */
  cacheLocal?: null | boolean | ICacheLocalOptions;
  /**
   * 通常执行了某数据的「写」操作后（增、删、改）需要对其已有的本地缓存进行清理，可以在这些写操作中使用此参数，会
   * 在接口执行成功后，将缓存中 key 值带有 cacheLocalRemove 指定串的进行移除
   * 
   * 注意可能会误伤友军（不会造成问题），所以，尽可能使用常量或者 URL 本身（因为默认的 key 中是带 URL 的）
   */
  cacheLocalRemove?: string;
}
```
