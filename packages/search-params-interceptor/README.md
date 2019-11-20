# @alicloud/search-params-interceptor
`axios`<sup>1</sup> 请求拦截器（request.interceptor<sup>2</sup>），用于把请求的参数对象转化为 URLSearchParams<sup>3</sup> 对象，然后再发送给 **server** 端。

## 用法
先使用 **npm** 进行安装
```
npm install --save @alicloud/search-params-interceptor
```
然后 `import` 进来传递给 `axios`
```js
import axios from 'axios'
import searchParamsInterceptor from '@alicloud/search-params-interceptor'

axios.interceptors.request.use(searchParamsInterceptor)
```
或传递给 `axios` 的一个实例
```js
import axios from 'axios'
import searchParamsInterceptor from '@alicloud/search-params-interceptor'

const instance = axios.create()
instance.interceptors.request.use(searchParamsInterceptor)
```

## 项目结构
```
lib/                    # babel 转义后的代码
node_modules/
src/                    # 源代码
test/                   # 单元测试
.browserslistrc         # 浏览器支持的 query
.npmignore              # npm 打包忽略文件
babel.config.js         # babel 配置文件
package-lock.json       # npm 包版本管理文件
package.json            # 项目的 meta 信息
README.md               # 项目说明
```

## 注释
1. [axios 文档](https://github.com/axios/axios)
2. [axios 拦截器（interceptor）](https://github.com/axios/axios#interceptors)
3. [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)