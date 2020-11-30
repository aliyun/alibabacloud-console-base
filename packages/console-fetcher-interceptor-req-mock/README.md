@alicloud/console-fetcher-interceptor-req-mock
===

利用 mocks.alibaba-inc.com 对非 OneConsole 及非 OneConsole 的接口进行 mock。

# 如何使用

注意：此代码虽然体积很小，但也绝不应该被打包到生产代码中去。

## 安装

安装到 `dev-dependencies` 里，而不是 `dependencies`。

```
tnpm i @alicloud/console-fetcher-interceptor-req-mock -D
```

## 使用

在你的 demo 代码里...

```typescript
import fetcher from '你的 fetcher 包';
import intercept from '@alicloud/console-fetcher-interceptor-req-mock';

intercept(fetcher); // 这里会影响到其他用这个 fetcher 的地方，所以这个只写在 demo 用的代码里就行
```
