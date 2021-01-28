@alicloud/console-fetcher-interceptor-req-security
===

* 发送请求前，在 body 中塞入额外的安全信息 `collina` + `umid` + `sec_token`
* 扩展 `FetcherConfig` 增加 `getCollina(): string` + `getUmid(): string` + `getSecToken(): string` 三个可选方法

阿里云控制台的 API POST 类的请求 body 因安全要求，必须有以下参数：

参数名 | 作用 | 来源
--- | --- | ---
`collina` | 人机识别 | 通过 `window[window.UA_Opt.LogVal]` 获取，`window.UA_Opt` 来自 `uab.js`，`uab.js` 是 t-engine 自动注入的
`umid` | 不知道干啥的 | 通过 `window.um.getToken()` 获取，`window.um` 来自 `um.js`，`um.js` 由应用主动写到页面
`sec_token` | 判断登录有效性 | 应用写到 HTML 的一个常量，OneConsole 有固定的方案，非 OneConsole 需要自行指定

# 对 `@alicloud/fetcher` 的 `FetcherConfig` 的扩展

可以在 config 对象上传入新增参数：

```typescript
interface FetcherConfigExtra {
  getCollina?: () => string;
  getUmid?: () => string;
  getSecToken?: () => string;
}
```

# INSTALL

```
tnpm i @alicloud/console-fetcher-interceptor-req-security -S
```

# 使用

```typescript
import createFetcher, {
  Fetcher
} from '@alicloud/fetcher';
// import interceptors 1
import intercept, {
  FetcherConfigExtended
} from '@alicloud/console-fetcher-interceptor-req-security';
// import interceptors 2

const fetcher: Fetcher<FetcherConfigExtended> = createFetcher<FetcherConfigExtended>({
  getCollina, // 一般不需要自己传，这里已经做好了
  getUmid, // 一般不需要自己传，这里已经做好了
  getSecToken // 非 OneConsole 可能需要传
});

// ... add interceptors 1  
intercept(fetcher);
// ... add interceptors 2

export default fetcher;
```

# 如何覆盖默认

> 注意：
> 1. 不建议覆盖 ￿`getCollina`，因为这里的实现可以说是通用的
> 2. 不建议覆盖 `getUmid`，因为这里的实现可以说是通用的
> 3. 非 OneConsole 的话，才有可能需要 `getSecToken`

## 方法 1 - 创建实例时传入默认值

假设 `:` 是你项目下 `src` 的 alias。

创建自己的 `Fetcher` 实例，传入默认值：

```typescript
// src/util/fetcher.ts
import createFetcher, {
  Fetcher
} from '@alicloud/fetcher';
// import interceptors 1
import intercept, {
  FetcherConfigExtended
} from '@alicloud/console-fetcher-interceptor-req-security';
// import interceptors 2

// import getCollina from ':/util/get-collina';
// import getUmid from ':/util/get-umid';
import getSecToken from ':/util/get-sec-token';

const fetcher: Fetcher<FetcherConfigExtended> = createFetcher<FetcherConfigExtended>({
  // getCollina,
  // getUmid,
  getSecToken
});

// ... add interceptors 1  
intercept(fetcher);
// ... add interceptors 2

export default fetcher;
```

## 方法 2 - 调用的时候传入覆盖

```typescript
import fetcher from ':/util/fetcher'; // 假设这是你项目下的 fetcher 文件路径
// import getCollina from ':/util/get-collina';
// import getUmid from ':/util/get-umid';
import getSecToken from ':/util/get-sec-token';

interface IResult {
  id: string;
  name: string;
}

interface IBody {
  id: string;
}

fetcher.request<IResult>({
  url: '____url____',
  // getCollina,
  // getUmid,
  getSecToken
});

fetcher.post<IResult, IBody>({
  // getCollina,
  // getUmid,
  getSecToken
}, '____url____', {
  id: '____id____'
});
```
