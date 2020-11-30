@alicloud/console-base-error-prompt
====

TODO see in action

> [@alicloud/error-prompt](https://npm.alibaba-inc.com/package/@alicloud/error-prompt) 的进化版，不再依赖 wind 和 fusion，也不需要手动引样式和指定语言，更不再是一个工厂。

# 使用

## 一般用法

```typescript
import errorPrompt from '@alicloud/console-base-error-prompt';

errorPrompt('字符串 message');
errorPrompt(<p>JSX 错误 message</p>);
errorPrompt({ // 包含 message 的 plain 对象
  message: string | JSX.Element;
  requestId: string;
  code: string;
  url: string;
  method: string;
  params: string | Record<string, unkonwn>;
  body: string | Record<string, unkonwn>;
});
errorPrompt(error); // error 对象，可以在其下塞入 details: {requestId, code, url, method, params, body}
```

默认 error 详情中有 `requestId`、`code`、`url`、`method`、`params`、`body`，其中的 `params` 和 `body` 可以是字符串或对象，展示的时候会做相应的变化。

除了以上这些信息之外，你可以随意补充其他的信息，如：

```typescript
errorPrompt({ // 包含 message 的 plain 对象
  ...
  extra1,
  extra2,
  extra3
});
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
}));
```
