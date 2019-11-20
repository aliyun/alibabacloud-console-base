# @alicloud/console-response-interceptor
处理 **one-console** 请求返回的数据，如果请求成功会直接返回瑶池的数据，如果请求失败会抛出异常。如果在配置请求的时候设置了 `config.ignoreError` 则会返回异常的 `response` 到上层，而不 `throw` 任何的 Error。

## 使用
先通过 **npm** 安装
```
npm install --save @alicloud/console-response-interceptor
```

然后在配置 `axios` 的地方使用
```js
import consoleResponseInterceptor from '@alicloud/console-response-interceptor'

axios.interceptors.response.use(consoleResponseInterceptor)
```