# @alicloud/console-request-interceptor

这是一个 [`axios`](https://github.com/axios/axios) 的请求 **[拦截器（request interceptor）](https://github.com/axios/axios#interceptors)**，用来预处理 **one-console** 应用的请求参数，主要实现下面  几个功能：

1. **one-console** 参数格式检查
2. 格式化部分参数（JSON.stringify(params)，JSON.stringify(actions)）
3. **one-console**  参数补全
   - sec_token
   - collina
   - umid
   - region
   - ......
4. 自动分析请求地址是 `/data/api.json` 还是 `/data/multiApi.json`
5. 自动设置请求方法为 `post`

## 用法

使用 **npm** 安装

```
npm install --save @alicloud/console-request-interceptor
```

在配置 `axios` 的地方使用

```js
import consoleRequestInterceptor from '@alicloud/console-request-interceptor'

axios.interceptors.request.use(consoleRequestInterceptor)
```

或给 `axios` 的实例使用

```js
import axios from 'axios'
import consoleRequestInterceptor from '@alicloud/console-request-interceptor'

const instance = axios.create()
instance.interceptors.request.use(consoleRequestInterceptor)
```
