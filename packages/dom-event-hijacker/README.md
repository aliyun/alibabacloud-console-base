@alicloud/dom-event-hijacker
===

全局或局部的事件劫持器

# 安装

```bash
tnpm i -S  @alicloud/dom-event-hijacker
```

```typescript
import hijackClickGlobal, {
  hijackClickInDom
} from '@alicloud/dom-event-hijacker';

// 全局劫持
hijackClickGlobal(hijackor);

// 局部劫持
hijackClickInDom(dom, hijackor);
```

```typescript
interface Interceptor<T> {
  condition: (el: HTMLElement) => T | void; // 判定条件，返回「真」即表示劫持成功，改返回值将作为 callback 的第二参数
  callback?(el: HTMLElement, conditionResult: T): void; // 劫持操作
  noPreventDefault?: boolean; // 劫持后是否不 preventDefault
  noStopPropagation?: boolean; // 劫持后是否不 stopPropagation
}
```
