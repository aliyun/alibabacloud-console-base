# @alicloud/dom-event-hijacker

全局或局部的事件劫持器

## INSTALL

```bash
tnpm i -S  @alicloud/dom-event-hijacker
```

```typescript
import hijackClickGlobal, {
  hijackClickInDom
} from '@alicloud/dom-event-hijacker';

// 全局劫持
hijackClickGlobal(hijacker);

// 局部劫持
hijackClickInDom(dom, hijacker);
```

```typescript
interface Hijacker<T> {
  condition: (el: HTMLElement) => T | void; // 判定条件，返回「真」即表示劫持成功，改返回值将作为 callback 的第二参数
  callback?(el: HTMLElement, conditionResult: T): void; // 劫持操作
  shouldPreventDefault?: boolean; // 默认仅对链接阻止其默认行为
  shouldStopPropagation?: boolean; // 默认不阻止事件冒泡
}
```
