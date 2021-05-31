@alicloud/console-fetcher-interceptor-cache-local
===

> `@alicloud/fetcher` 的本地缓存拦截器

发送请求的时候判断时候已存在缓存数据，如果存在则直接返回；如果存在正在发送的相同请求，也直接返回一个 promise（会被正在发送的请求 resolve 或 reject）。

它主要是请求拦截器，但也会拦截响应（为了获取数据），所以顺序上需要放在对响应数据提取的拦截器之后。
