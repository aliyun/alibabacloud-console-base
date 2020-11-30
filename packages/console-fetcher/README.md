@alicloud/console-fetcher
===

一个专门为控制台量身定制的请求包，在 `@alicloud/console-fetcher-basic` 的基础上添加以下拦截器：

* `@alicloud/console-fetcher-interceptor-res-risk` 特殊的业务错误类型 - 风控 - 需要对其进行提示或二次验证
* `@alicloud/console-fetcher-interceptor-res-sls` 对错误进行 SLS 上报，必须传入配置参数

# INSTALL

```
tnpm i @alicloud/console-fetcher -S
```

# API

开箱即用的 fetcher，没有 SLS 日志。

```typescript
import fetcher from '@alicloud/console-fetcher';

fetcher.get<T = void, P>(url: string, params): Promise<T>;
fetcher.post<T = void, B, P>(url: string, body: B, params: P): Promise<T>;
fetcher.put<T = void, B, P>(url: string, body: B, params: P): Promise<T>;
fetcher.delte<T = void, B, P>(url: string, body: B, params: P): Promise<T>;
fetcher.callOpenApi<T = void, P>(product: string, action: string, params: P): Promsie<T>;
fetcher.callInnerApi<T = void, P>(product: string, action: string, params: P): Promsie<T>;
fetcher.callContainerApi<T = void, P>(product: string, action: string, params: P): Promsie<T>;
```

如果你需要对风控做自定义，或者在接口出错时通过 SLS 上报错误日志，可以通过 `createFetcher` 创建一个 fetcher，创建出来的 fetcher 和开箱即用的长相一模一样：

```typescript
import {
  createFetcher
} from '@alicloud/console-fetcher';

cosnt fetcher = createFetcher(undefined, {
  riskConfig,
  slsConfig
});
```

具体请看 `build/types` 下的详细类型声明。
