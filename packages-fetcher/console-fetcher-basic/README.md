# @alicloud/console-fetcher-basic

> 控制台请求基础包，无风控，仅对一般性错误做国际化，对业务错误进行封装。

一个专门为控制台量身定制的请求 **基础** 包：

* `@alicloud/console-fetcher-interceptor-res-error-message` 国际化基本错误（Timeout、NetworkError 等）
* `@alicloud/console-fetcher-interceptor-req-security` 为类 POST 添加必要的安全参数
* `@alicloud/console-fetcher-interceptor-res-biz` 请求成功，判断业务成功或失败，成功则返回真正的 data，失败则抛出封装后的业务错误对象

注意它之所以称为 **基础** 是没有添加风控，原因：

1. 不是所有的控制台都需要风控
2. 风控以 react 实现，不是所有的控制台都有 react，ng 下可以自主实现风控

有风控需求，且应用是 react 的请使用 `@alicloud/console-fetcher`。

## 输出

跟 `@alicloud/fetcher` 一致，除了：

1. 扩展了 `Fetcher`，新增 API 方法
  1.1 `callInnerApi`
  1.2 `callContainerApi`
  1.3 `callOpenApi`
  1.4 `callMultiOpenApi`
2. 扩展了 `FetcherConfig`
3. 新增 API 类型输出
  3.1 `FetcherConsoleApiOptions`
  3.2 `FetcherFnOpenApi`
  3.3 `FetcherFnInnerApi`
  3.4 `FetcherFnContainerApi`
  3.5 `FetcherFnOpenApiMulti`
