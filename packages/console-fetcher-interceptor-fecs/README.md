# @alicloud/console-fetcher-interceptor-fecs

`@alicloud/fetcher` 针对 FECS 请求的拦截，包括请求中，该拦截器会做请求和响应两次拦截，条件是请求的 FECS 接口，且为带 body 请求（POST、PUT、DELETE 等）。

* 请求：添加 `body.sec_token` 参数，因为 `@alicloud/console-fetcher-interceptor-req-security` 做了类似的事情，所以要放在它后边；
* 响应：在发生特定错误的时候，做刷新 token 的操作并再次发送请求，因为「特定错误」需要靠 `@alicloud/console-fetcher-interceptor-res-biz` 转化得到，所以要放在它后边。

## 拦截器顺序要求

拦截器位置

* @alicloud/console-fetcher-interceptor-req-security
* ...
* @alicloud/console-fetcher-interceptor-res-biz
* ...
* @alicloud/console-fetcher-interceptor-fecs <--

## INSTALL

```shell
tnpm i @alicloud/console-fetcher-interceptor-fecs -S
```

## APIs

```typescript
import createFetcher, {
  Fetcher
} from '@alicloud/fetcher';
// import interceptors 1
import intercept from '@alicloud/console-fetcher-interceptor-fecs';
// import interceptors 2

const fetcher: Fetcher = createFetcher();

// ... add interceptors 1
intercept(fetcher);
// ... add interceptors 2

export default fetcher
```
