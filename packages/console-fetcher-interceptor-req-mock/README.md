# @alicloud/console-fetcher-interceptor-req-mock

利用 oneapi.alibaba-inc.com 对 OneConsole 及非 OneConsole 的接口进行 mock。

注意：此代码虽然体积很小，但也绝不应该被打包到生产代码中去。

## Install

```shell
tnpm i @alicloud/console-fetcher-interceptor-req-mock -D
```

注意是安装到 `dev-dependencies` 里，而不是 `dependencies`。

## Usage

在你的 demo 代码里...

```typescript
import fetcher from '你的 fetcher 包';
import intercept from '@alicloud/console-fetcher-interceptor-req-mock';

intercept(fetcher, options?); // 这里会影响到其他用这个 fetcher 的地方，所以这个只写在 demo 用的代码里就行
```
