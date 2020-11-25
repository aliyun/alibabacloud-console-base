# @alicloud/console-risk-interceptor

这是一个 `axios` 的 **response** 拦截器，用于拦截触发了风控的请求，并完成风控验证后返回业务期望的 **response**。

## 使用

先通过 **npm** 安装

```
npm install --save @alicloud/console-risk-interceptor
```

然后在配置 `axios` 的地方使用

```js
import consoleRiskInterceptor from '@alicloud/console-risk-interceptor'

axios.interceptors.response.use(consoleRiskInterceptor)
```

## 原理

```
         Found Risk             Intercept By                Handle Risk
Request ------------> Response --------------> Interceptor ------------>

                 Pass to
Response(new) ------------> CodeThatInitializeTheRequest
```

## 风控

<img src="https://gw.alicdn.com/tfs/TB1GGeonpzqK1RjSZFvXXcB7VXa-1484-886.png">
