# @alicloud/console-base-intl-factory

`@alicloud/console-base-intl-factory-basic` 上的扩展，标准化带 HTML 及换行的输出样式。

这个包会额外要求引入 React，如果只是需要纯文本的国际化，请使用 `@alicloud/console-base-intl-factory-basic`。

## INSTALL

```shell
tnpm i @alicloud/console-base-intl-factory -S
```

## API

```typescript
export default (messagesMap: Record<string, Record<string, string>>, options?: IntlFactoryOptions) => <V extends {} = {}, T = string>(id: string, values?: V, instructionsExtra?: IntlInstructions) => T;

interface IntlFactoryOptions extends IntlFactoryOptionsBasic { // IntlFactoryOptionsBasic from @alicloud/console-base-intl-factory-basic
  instructionSeparator?: string;
  htmlInstruction?: string;
  linesInstruction?: string;
}

interface IntlInstructions {
  html?: boolean;
  lines?: boolean;
}
```

## USAGE

## 定义你自己的 `intl`

```typescript
// src/intl/index.ts
import intlFactory from '@alicloud/console-base-intl-factory';

import localeZhCN from './messages/zh-cn';
import localeEnUS from './messages/en-us';

export default intlFactory<typeof localeZhCN>({
  'zh-CN': localeZhCN, // 这里的 key 你可以写成 zhCN zh_cn 等，这里自会处理成 kebab-case 的 'zh-cn'
  'en-US': localeEnUS // 默认会把当前语言的 messages 和英文下做一个 merge，在当前语言下找不到的 message 会 fallback 为英文
}, {
  locale, // 可选，当前的 locale
  localeDefault, // 可选，默认 fallback 的 locale，默认英文
  instructionSeparator, // 可选，默认 '!'
  htmlInstruction, // 可选，默认 'html'
  linesInstruction, // 可选，默认 'lines'
});
```

这样，你的 `intl` 方法就有了根据 key 的后缀自动将文案渲染成带有样式的 HTML。

## 使用你的 intl 方法

```typescript
import intl from ':/intl';

intl('xxx');
intl('xxx_{id,name}!html', { // 将渲染成 HTML
  id,
  name
});
intl('xxx!html!lines'); // 将渲染成 HTML，且内部的换行均有意义（会转成 p、ul、ol 等）
```
