@alicloud/fetcher-jsonp
===

> `@alicloud/fetcher` 的底层 Promise 比较「纯」的 jsonp 实现，可以单独使用，返回为封装过的 `JsonResponse` 而非直接的数据。

何以「纯」？

`url` 需要使用者来拼接参数（跟原生的 fetch 类似）。

# INSTALL

```
tnpm i @alicloud/fetcher-jsonp -S
```

# API

```typescript
import jsonp, {
  EJsonpError,
  JsonpOptions
} from '@alicloud/fetcher-jsonp';

jsonp(url, {
  timeout, // 超时毫秒数，默认 5 秒（一般来说 JSONP 请求要求必须有超时时间）
  charset,
  jsonpCallback,
  jsonpCallbackFunction
});
```
