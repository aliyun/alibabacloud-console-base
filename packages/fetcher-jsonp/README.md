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
  jsonpCallbackFunction,
  signal // 和 fetch 一致
});
```

# 如何 abort

参考 <https://javascript.info/fetch-abort> <https://developer.mozilla.org/en-US/docs/Web/API/AbortController>

```typescript
import jsonp from '@alicloud/fetcher-jsonp';

function getAbortSignal(): AbortSignal | undefined {
  if (!window.AbortController) { // IE 下都不支持，请 if 保护
    return;
  }
  
  const abortController = new AbortController();
  
  setTimeout(() => { // 这里是模拟的，实际场景中不会用 setTimeout
    abortController.abort(); // 只有第一次调用有效
  }, 200);
  
  return abortController.signal;
}

return jsonp(jsonpUrl, {
  signal: getAbortSignal(),
  timeout
}).then(response => response.json());
```

请求被 Abort 只是形式上的 Abort，就像 `timeout` 一样，请求最终还是会继续（即使 DOM script 已经被移除）。
Abort 后得到的错误和原生的 AbortError 类似，其 name 属性为 `AbortError`。
