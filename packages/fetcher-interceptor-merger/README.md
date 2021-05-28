@alicloud/fetcher-interceptor-merger
===

> `@alicloud/fetcher` 合并请求拦截器，如果有相同的请求（method + url + params + body）正在进行，在后续的请求不会发送，而会在第 0 个请求回来之后决定成功或失败。

cache-local 也会做一部分类似的事情，所以顺序上要放在 cache-local 之后。

和 cache-local 不同的是，cache-local 需要手动开启，而 merger 是自动开启的。
