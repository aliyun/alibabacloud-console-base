@alicloud/console-base-error-prompt
====

TODO see in action

> `@alicloud/error-prompt` 的进化版，不再依赖 wind 和 fusion，也不需要手动引样式和指定语言，更不再是一个工厂。

# 使用

## 一般用法

```tsx
import errorPrompt from '@alicloud/console-base-error-prompt';

errorPrompt(error/*, extra*/);
```

`error` 可以是以下类型：

* `undefined | null` 将被忽略
* 字符串
* JSX
* plain 对象
* 扩展了的 Error 实例对象

如果 error 是对象，除了标准属性 message 之外，可以附加 code、requestId，同时可以有 `details` 属性，长这样：

```typescript
interface IErrorDetails {
  url?: string;
  method?: string;
  params?: string | Record<string, unkonwn>;
  body?: string | Record<string, unkonwn>;
}
```

## 自定义标题、按钮

有的时候，会根据 `code` 可能需要调整 `title` 和 `button`。

```typescript
errorPrompt(error, {
  button,
  title
});

// 或
errorPrompt(error, ({ // 这里是解析后的对象，保证存在，但不保证有 code
  code
}) => {
  if (code === 'ConsoleNeedLogin') {
    return {
      title: '你妹登录 - 需要国际化',
      button: {
        href: '/',
        target: '_blank',
        label: '登录 - 需要国际化'
      }
    };
  }
});
```

## 如何忽略错误

所谓「忽略」错误，是指虽然被接收，但不会弹窗。

虽然可以用 `null | undefined`，是的，在 JS 中 `null | undefined` 是可以被当成错误的存在，但这并不是推荐的做法。

这种场景下，可以利用帮助方法 `createErrorToIgnore` throw 一个新错误，这个错误一定会被忽略。

```typescript
import {
  createErrorToIgnore
} from '@alicloud/console-base-error-prompt';

try {
  doMyStuff();
} catch (err) {
  // 可以忽略该错误，或错误在业务层已经被处理
  if (canIgnoreError(err)) {
    throw createErrorToIgnore();
  }
}
```
