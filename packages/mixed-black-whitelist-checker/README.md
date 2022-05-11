# @alicloud/mixed-black-whitelist-checker

混合黑白名单检查器

```typescript
import mixedBlackWhitelistChecker from '@alicloud/mixed-black-whitelist-checker';

mixedBlackWhitelistChecker(value, mixedBlackWhiteList);
```

方法签名：

```typescript
function mixedBlackAndWhitelistChecker(value: string, mixedList: string[]): boolean;
```

举例

```typescript
mixedBlackAndWhitelistChecker('cn-hz', []); // → true
mixedBlackAndWhitelistChecker('cn-hz', ['cn-sh', 'cn-hz]); // → true
mixedBlackAndWhitelistChecker('cn-hz', ['cn-*']); // → true
mixedBlackAndWhitelistChecker('cn-hz', ['cn-sh', '!cn-hz]); // → false
mixedBlackAndWhitelistChecker('cn-hz', ['cn-*', '!cn-hz]); // → false
```
