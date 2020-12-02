@alicloud/console-fetcher-interceptor-res-error-message
===

> `@alicloud/fetcher` 响应错误拦截，国际化通用的错误的 message。

`@alicloud/fetcher` 为了保证自己的普适性，不会对其封装的错误进行国际化，这个拦截器就是为了做这件事情。

* 仅对 **网络错误**、**网络超时**、**请求响应状态错误** 做国际化输出；
* 没有额外 config 扩展

# INSTALL

```
tnpm i @alicloud/console-fetcher-interceptor-res-error-message -S
```

# API

```typescript
import createFetcher, {
  Fetcher
} from '@alicloud/fetcher';
// import interceptors 2
import intercept from '@alicloud/console-fetcher-interceptor-res-error-message';
// import interceptors 2

const fetcher: Fetcher = createFetcher();

// ... add interceptors 1  
intercept(fetcher);
// ... add interceptors 2

export default fetcher
```
