# @alicloud/console-base-intl-factory-basic

ConsoleBase 用的一个极简极简的国际化（仅仅是做语言解析）

## INSTALL

```bash
tnpm i @alicloud/console-base-intl-factory-basic -S
```

## USAGE

## 定义你自己的 `intl`

```typescript
// src/intl/index.ts
import intlFactory from '@alicloud/console-base-intl-factory-basic';

import localeZhCN from './messages/zh-cn';
import localeEnUS from './messages/en-us';

const intl = intlFactory<typeof localeZhCN>({
  'zh-CN': localeZhCN, // 这里的 key 你可以写成 zhCN zh_cn 等，这里自会处理成 kebab-case 的 'zh-cn'
  'en-US': localeEnUS // 默认会把当前语言的 messages 和英文下做一个 merge，在当前语言下找不到的 message 会 fallback 为英文
}, {
  locale, // 可选，当前的 locale
  localeDefault // 可选，默认 fallback 的 locale，默认英文
});

export default intl;

export const {
  intlDate
} = intl;
```

以上，注意 `<keyof typeof zhCN>` 可写可不写，如果加了这个泛型，则 TS 将保障 key 的合法性。

## 使用你的 intl 方法

```typescript
import intl from ':/intl';

intl('xxx');
intl('xxx_{id,name}', {
  id,
  name
});
intl<{n: number}>('xxx_{n}', { // 约束 values
  n
});
```
