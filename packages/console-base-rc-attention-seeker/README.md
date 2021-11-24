@alicloud/console-base-rc-attention-seeker
===

# Usage

一般不建议直接用组件的形式调用，而是通过 append、prepend、refresh、clear 等方法。

建议对需要提示用户关注的地方单独写一个组件，如下，注意 ref 必须是 HTML 元素。

```typescript tsx
import React, {
  useRef,
  useEffect
} from 'react';

import {
  append
} from '@alicloud/console-base-rc-attention-seeker';

export default function PickMe(): JSX.Element {
  const refSpan = useRef<HTMLSpanElement | null>(null);
  
  useEffect(() => {
    if (refSpan.current) {
      return append(refSpan.current);
    }
  }, []);
  
  return <span ref={refSpan}>and i will get the attention</span>;
}
```

# API

TODO 目前没有上一个下一个...

## default export - 组件

基本用不到

## `append(element: HTMLElement, options?: IAttentionSeekerOptions): () => void;`

将元素添加到元素列表，返回解除的无参回调函数可用于 useEffect。

## `prepend(element: HTMLElement, options?: IAttentionSeekerOptions): () => void`

将元素添加到元素列表（如果希望添加后立即高亮，用它），返回解除的无参回调函数可用于 useEffect。

## `clear(): void`

清除所有元素。

## `refresh(): void`

刷新（基本应该用不到了）。
