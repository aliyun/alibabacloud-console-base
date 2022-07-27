# @alicloud/console-base-messenger-resource-group

封装 postMessage 相关

## INSTALL

```shell
tnpm i @alicloud/console-base-messenger-resource-group -S
```

## USAGE

```typescript
import {
  forApp,
  forConsoleBase
} from '@alicloud/console-base-messenger-resource-group';
```

`forApp.xx()` **一定**会被 `forConsoleBase.onXx()` 接收并处理；`forConsoleBase.xx()` **可能**会被 `forApp.onXx()` 接收。即，ConsoleBase 一定要实现所有的 `forApp.xx` 事件的监听，应用则只需要对自己关心的事件进行监听即可。

## 控制台应用

作为控制台应用，你需要关心的只有 `forApp` 这个对象，它下边你可以拿到 `xx` 和 `onXx` 系列方法，`xx` 表示你要告诉 console-base 做什么，`onXx` 表示你在关心 console-base 的某些事件，且希望在这些事件发生的时候做对应的事情。
