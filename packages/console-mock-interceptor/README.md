# @alicloud/console-mock-interceptor
使用此拦截器会在 `localhost` 情况下把用户的请求代理到 **Mocks** 平台，如果调用的 `product` 与 **Mocks** 平台的项目不一致，开发者可以为这些 `product` 设置别名。

## 用法
先使用 npm 安装
```
npm install --save @alicloud/console-mock-interceptor
```

在配置 `axios` 的地方使用，拦截器默认导出一个函数，这个函数接受一个参数即一个 `alias` 映射对象。
```js
import consoleMockInterceptor from '@alicloud/console-mock-interceptor'

// 不设置 alias
axios.interceptors.request.use(consoleMockInterceptor())


// 设置 alias
axios.interceptors.request.use(consoleMockInterceptor({ vpc: 'vpc_next', ram: 'ram_next' }))
```

## 设置 alias
如果设置 `alias`，那么请求所对应的 `product` 参数会自动映射到配置好的别名上去。即当请求参数 `product = vpc` 时，拦截器会把它转化为 `product = vpc_next`，再把请求代理到 **Mocks** 平台。这样可以解决实际 `product` 名称与 **Mocks** 平台项目名称不相符的问题。
