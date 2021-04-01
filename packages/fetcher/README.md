@alicloud/fetcher
===

一个类似 axios 的带拦截器的请求包。

为何不用 [axios]？

1. not a fan
2. axios 它底层用的是 XHR 不是 fetch
3. axios 的 API 设计过于冗长，比如添加拦截器，它是 `axios.interceptors.request|response.use`，解除用 `axios.interceptors.request|response.eject`，而且要传入前者返回的值（数字，存在安全风险）
4. axios request 拦截器是倒着插入的，response 是顺的，用起来非常别扭
5. axios request 拦截器可以传跟 response 拦截器一样传两个函数
6. axios request 拦截器一旦出错，真正的请求不会发，但却会触发 response 拦截器中的 fail
7. axios 对结果做了封装，要拿里边真正的数据就需要剥洋葱
8. axios 的实例貌似无法「封锁」，每个人都可以来干它，可能谁都不知道谁干了什么，这很容易造成问题
9. 对 axios 不熟，以上说法可能有失偏颇

# INSTALL

```
tnpm i @alicloud/fetcher -S
```

# Polyfill

这里对浏览器的依赖主要有两个：[fetch] 和 [Promise]：

* `fetch` 在依赖包 `@alicloud/fetcher-fetch` 中用 [unfetch] 做了 fallback，没有全局 polyfill，应用可自行选择，比如 [whatwg-fetch]
* `Promise` 需要应用代码保证

# API

你可以直接用「开箱即用」的 fetcher：

```typescript
import fetcher from '@alicloud/fetcher';

const {
  request,
  jsonp,
  get,
  delete,
  post,
  put,
  patch
} = fetcher;
```

注意，

1. 里边的方法可以直接析构出来使用
2. 此开箱即用的 fetcher 无法添加拦截器

也可以通过工厂方法 `createFetcher` 创建自己的 fetcher，这样你便可以对它添加拦截器（当然，添加完最后你也可以选择锁定它以保证不被别的代码干扰）。

```typescript
import {
  createFetcher
} from '@alicloud/fetcher';

const fetcher = createFetcher();

const {
  interceptRequest,
  interceptResponse,
  sealInterceptors
} = fetcher;

// 添加拦截器
interceptRequest(fn);
interceptResponse(fnSuccess, fnFail);
// 锁定拦截器（你可以通过传参选择封锁对请求还是响应的拦截处理）
sealInterceptors();

export default fetcher;
```

# 封装自己的工厂？

有的时候，你可能需要封装自己的工厂。

假设，你封装的将作为一个 npm 包，那么你需要在你的包中最好能够输出这里的 **所有输出**（包括 type）。

# 拦截器

fetcher 拦截器的设计：

1. 接口简单：`interceptRequest` 和 `interceptResponse`，它返回一个解除拦截的无参函数
2. 保证顺序
3. request 拦截器仅需要一个回调，response 还是保持两个
4. request 拦截一旦抛错，即中止
5. response 不会被包裹
6. 拦截器的最末一个参数是当前的 `Fetcher` 实例，你可以用它做一些其他的事情，但请保证不会无限循环

## 创建拦截器最佳实践

### 不好的例子

一般来说，拦截器可以单独写成 npm 包以便复用，但这个包它不应当有这样的想法：「嗯，调用我的人一定知道怎么使用我。」

你可能会这么写：

```typescript
import {
  Fetcher,
  FetcherConfig,
  FetcherError
} from '@alicloud/fetcher';

export default (err: FetcherError, fetcherConfig: FetcherConfig, fetcher: Fetcher): void => {
  // do sth. according to err and config
  
  const dealt = dealWithError(err, config);
  
  if (dealt) {
    return;
  }
  
  throw err; // 没处理的错误继续 throw
};
```

但这样写不合适。因为它要求使用者必须了解究竟是用 `interceptRequest` 还是 `interceptResponse`，而用 `interceptResponse` 的时候是第一个回调还是第二个。

使用者需要对你的 interceptor 十分了解才能用它，像这样：

```typescript
// interceptor-package/src/index.ts
import createFetcher, {
  Fetcher
} from '@alicloud/fetcher';
import interceptor from 'interceptor-package';

const fetcher: Fetcher = createFetcher();

fetcher.interceptResponse(undefined, interceptor); // 这里会造成困扰，很容易搞错

export default fetcher;
```

### 好的例子

以上这么做并不是不对，而是不合适，给使用者造成困扰。而更合适的方式，是你告诉使用者：「嘿，把你的 Fetcher 实例给我，剩下的交给我。」

同时，更更好的是，把你的拦截器，写成一个工厂方法，这样它就可以更具有普适性。

你可以看仓库中的几个拦截器，都是很好的例子：

* `console-fetcher-interceptor-arms`
* `console-fetcher-interceptor-fecs`
* `console-fetcher-interceptor-req-mock`
* `console-fetcher-interceptor-req-security`
* `console-fetcher-interceptor-res-biz`
* `console-fetcher-interceptor-res-error-message`
* `console-fetcher-interceptor-res-risk`
* `console-fetcher-interceptor-sls`

他们的特点：

`src/index` export `util/intercept` 为 default，并可能输出类型 `FetcherInterceptorConfig`、`FetcherConfigExtra`、`FetcherConfigExtended`。

`util/intercept` 利用的是可能存在的以下三个文件，它们的输入都是 `FetcherInterceptorConfig`：

* `util/create-interceptor-request` → `FetcherFnInterceptRequest`
* `util/create-interceptor-response-fulfilled` → `FetcherFnInterceptResponseFulfilled`
* `util/create-interceptor-response-rejected` → `FetcherFnInterceptResponseRejected`

类型说明（任何一个都是可选的）：

* `FetcherInterceptorConfig` 如上所说，是拦截器创建时需要的参数。
* `FetcherConfigExtra` 是对 `@alicloud/fetcher` 的 `FetcherConfig` 的扩展，用于合适的地方做 `interface` 的 `extend`
* `FetcherConfigExtended` 是扩展后的 `FetcherConfig`，一般不该被直接用到

## 拦截器最佳实践

```
src/
 ├── types/
 │   └── index.ts
 ├── util/
 │   ├── ...
 │   ├── create-interceptor-request.ts
 │   ├── create-interceptor-response-fulfilled.ts
 │   ├── create-interceptor-response-rejected.ts
 │   └── intercept.ts
 └── index.ts
```

### src/types/index.ts 范例

```typescript
import {
  FetcherConfig
} from '@alicloud/fetcher';

// 创建拦截器时的配置参数，将被用于 fetcher 工厂的扩展参数
export interface IFetcherInterceptorConfig {
  ...
}

export interface IFetcherConfigExtra {
  ...
}

export interface IFetcherConfigExtended extends FetcherConfig, IFetcherConfigExtra {}
```

### src/util/create-interceptor-request.ts 范例

```typescript
import {
  FetcherFnInterceptRequest,
  FetcherInterceptRequestReturn
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig,
  IFetcherConfigExtended
} from '../types';

export default function createInterceptorRequest(interceptorConfig: IFetcherInterceptorConfig): FetcherFnInterceptRequest<IFetcherConfigExtended> {
  // 在这里消费 interceptorConfig
  
  return (fetcherConfig: IFetcherConfigExtended): FetcherInterceptRequestReturn<IFetcherConfigExtended> => {
    ...
  };
}
```

### src/util/create-interceptor-response-fulfilled.ts 范例

```typescript
import {
  FetcherFnInterceptResponseFulfilled
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig,
  IFetcherConfigExtended
} from '../types';

export default function createInterceptorResponseFulfilled(interceptorConfig: IFetcherInterceptorConfig): FetcherFnInterceptResponseFulfilled<IFetcherConfigExtended> {
  // 在这里消费 interceptorConfig
  
  return (o: unknown, fetcherConfig: IFetcherConfigExtended): unknown => {
    ...
  };
}
```

### src/util/create-interceptor-response-rejected.ts 范例

```typescript
import {
  FetcherError,
  FetcherResponse,
  FetcherFnInterceptResponseRejected,
  FetcherFnRequest
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig,
  IFetcherConfigExtended
} from '../types';

export default function createInterceptorResponseRejected(interceptorConfig: IFetcherInterceptorConfig): FetcherFnInterceptResponseRejected<IFetcherConfigExtended> {
  // 在这里消费 interceptorConfig
  
  return (err: FetcherError, fetcherConfig: IFetcherConfigExtended, response: FetcherResponse, request: FetcherFnRequest): void => {
    ...
    
    throw err; // 如果继续错下去就得 throw
  };
}
```

### src/util/intercept.ts 范例

```typescript
import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig
} from '../types';

import createInterceptorRequest from './create-interceptor-request';
import createInterceptorResponseFulfilled from './create-interceptor-response-fulfilled';
import createInterceptorResponseRejected from './create-interceptor-response-rejected';

export default function intercept(fetcher: Fetcher, interceptorConfig: IFetcherInterceptorConfig): () => void {
  return fetcher.interceptRequest(createInterceptorRequest(interceptorConfig));
  // 或，任一个可为 undefined
  return fetcher.interceptResponse(createInterceptorResponseFulfilled(interceptorConfig), createInterceptorResponseRejected(interceptorConfig));
}
```

### src/index.ts 范例

```typescript
export { default } from './util/intercept';

export type {
  IFetcherInterceptorConfig as FetcherInterceptorConfig,
  IFetcherConfigExtra as FetcherConfigExtra,
  IFetcherConfigExtended as FetcherConfigExtended
} from './types';
```

[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[unfetch]: https://github.com/developit/unfetch
[whatwg-fetch]: https://github.com/github/fetch
[axios]: https://github.com/axios/axios
