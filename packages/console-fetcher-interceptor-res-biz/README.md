# @alicloud/console-fetcher-interceptor-res-biz

> `@alicloud/console-fetcher` 的响应拦截器，封装业务错误。
> 阿里云的数据接口规范：code + data。code 为 200（通常是字符串）的时候业务成功，需要返回 data，否则失败，抛错。

* 扩展 `FetcherConfig` 增加可选方法（一般情况下不需要设置，除非非正常场景）
  + `isSuccess(o: IBizJson): boolean`
  + `getData(o: IBizJson): T`
  + `getCode(o: IBizJson): string`
  + `getRequestId(o: IBizJson): string`
  + `getTitle(o: IBizJson): string`
  + `getMessage(o: IBizJson): string`

阿里云控制台的 API 请求一般会以如下形式返回：

```typescript
{
  code: string;
  requestId: string;
  data?: T;
  title?: string;
  message?: string;
}
```

其中 `code` 为 `'200'`（有些接口会是数字 `200`）的时候表示业务逻辑是成功的，这时候可以拿到 `data`；否则表示业务逻辑错误，这个时候可以拿到 `message`。

## INSTALL

```shell
tnpm i @alicloud/console-fetcher-interceptor-res-biz -S
```

## APIs

```typescript
import createFetcher, {
  Fetcher
} from '@alicloud/fetcher';
// import interceptors 1
import intercept, {
  FetcherConfigExtended
} from '@alicloud/console-fetcher-interceptor-res-biz';
// import interceptors 2

const fetcher: Fetcher<FetcherConfigExtended> = createFetcher<FetcherConfigExtended>();

// ... add interceptors 1  
intercept(fetcher);
// ... add interceptors 2

export default fetcher
```

## 对 `@alicloud/fetcher` 的扩展

### FetcherConfig

可以在 config 对象上传入新增参数：

```typescript
interface FetcherConfigExtra {
  /**
   * 判断请求是否成功，默认判断 `json.code === '200' || json.code === 200`
   * 
   * - `boolean` 直接成功或失败
   * - `(json: any) => boolean` 根据原始 json 对象进行自定义判断
   */
  isSuccess?: boolean | ((json: any) => boolean);
  /**
   * 提取最终需要的数据，默认 `json.data`
   * 
   * - `string` 自定义数据字段，如 `'DATA'` 则表示获取 `json.DATA`
   * - `(json: any) => any` 从原始 json 对象进行自定义提取
   */
  getData?: string | ((json: any) => any);
  /**
   * 当 `isSuccess` 判定为失败时，从数据中提取错误 code，默认 `json.code`
   * 
   * - `string` 自定义数据字段，如 `'DATA'` 则表示获取 `json.DATA`
   * - `(json: any) => any` 从原始 json 对象进行自定义提取
   */
  getCode?: string | ((json: any) => string);
  /**
   * 当 `isSuccess` 判定为失败时，从数据中提取错误 message，默认 `json.message`
   * 
   * - `string` 自定义数据字段，如 `'MESSAGE'` 则表示获取 `json.MESSAGE`
   * - `(json: any) => any` 从原始 json 对象进行自定义提取
   */
  getMessage?: string | ((json: any) => string);
}
```

### 错误名

`ERROR_BIZ = 'FetcherErrorBiz'`

## 如何覆盖默认

### 方法 1 - 创建实例时传入默认值

假设 `~` 是你项目下 `src` 的 alias。

创建自己的 Fetcher 实例，传入默认值：

```typescript
import createFetcher, {
  Fetcher
} from '@alicloud/fetcher';
// import interceptors 1
import intercept, {
  FetcherConfigExtended
} from '@alicloud/console-fetcher-interceptor-res-biz';
// import interceptors 2

const fetcher: Fetcher<FetcherConfigExtended> = createFetcher<FetcherConfigExtended>({
  isSuccess?,
  getData?,
  getCode?,
  getRequestId?,
  getTitle?,
  getMessage?
});

// ... add interceptors 1  
intercept(fetcher);
// ... add interceptors 2

export default fetcher;
```

### 方法 2 - 调用的时候传入覆盖

```typescript
import fetcher from '~/util/fetcher'; // 假设这是你项目下的 fetcher 文件路径

interface IResult {
  id: string;
  name: string;
}
interface IBody {
  id: string;
}

fetcher.request<IResult>({
  url: '____url____',
  isSuccess?,
  getData?,
  getCode?,
  getRequestId?,
  getTitle?,
  getMessage?
});

fetcher.post<IResult, IBody>({
  isSuccess?,
  getData?,
  getCode?,
  getRequestId?,
  getTitle?,
  getMessage?
}, '____url____', {
  id: '____id____'
});

// 假设有一个 JSONP 请求，它的返回直接就是数据（即没有业务错误）：

fetcher.jsonp({
  isSuccess: true,
  getData: json => json
}, '____url____')
```
