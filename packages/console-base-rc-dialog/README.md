@alicloud/console-base-rc-dialog
===

> might be the most simple-but-powerful react dialog for now...

# INSTALL

```
tnpm i @alicloud/console-base-rc-dialog -S
```

# API

## 作为组件使用（不太推荐）

```typescript jsx
import Dialog from '@alicloud/console-base-rc-dialog';

<Dialog {...props} />
```

## 作为 Promise 使用

```typescript
import {
  openIndirect,
  open,
  slide,
  alert,
  confirm,
  prompt
} from '@alicloud/console-base-rc-dialog';
```

TODO 这个文档需要好好写一下.. 例子和设计思想...

## 内容如何跟 Dialog 本身交互

### 使用 hook `useDialog`

```typescript
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

function SomeComponent() {
  const {
    close,
    lock,
    unlock
  } = useDialog();
}
```

### 使用 Context

```typescript
import {
  DialogContext
} from '@alicloud/console-base-rc-dialog';
```
