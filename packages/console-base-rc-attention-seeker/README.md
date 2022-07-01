# @alicloud/console-base-rc-attention-seeker

## Usage

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

## API

TODO 目前没有上一个下一个...

### default export - 组件

基本用不到

### `append(element: HTMLElement, options?: IAttentionSeekerOptions): () => void;`

将元素添加到元素列表，返回解除的无参回调函数可用于 useEffect。

### `prepend(element: HTMLElement, options?: IAttentionSeekerOptions): () => void`

将元素添加到元素列表（如果希望添加后立即高亮，用它），返回解除的无参回调函数可用于 useEffect。

### `clear(): void`

清除所有元素。

### `refresh(): void`

刷新（基本应该用不到了）。

## 关于背投

我们要达到这样的效果：

1. 有背投
2. 关注元素需要跳出背投

简言之，便是需要有「镂空」背投。

最早的设计是这样的：

1. 背投为实心的 div，绝对定位，占满全屏，以高 `z-index` 压住页面
2. 镂空的实现是将关注元素的 `z-index` 调整为高于背投的 `z-index` 让它「浮」上来

### 问题 I

但这有个问题：当关注元素的祖先节点有「生效的」`z-index` 的时候，变无法上提，这里有个 [Stacking Context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) 的概念。

这个问题的解法比较恶心，但可行，就是逐个把含 `z-index` 的祖先的 `z-index` 设置为 `auto !important`，当然后边会还原。

### 问题 II

解决了问题 I 之后，发现了另外一个问题：虽然祖先节点的 `z-index` 都已实现救赎，但还是有些元素无法浮上来：祖先元素的定位为 `sticky`、`fixed` 的时候，甚至会因为去掉了 `z-index`，而导致这些祖先元素中的其他节点无法展示。

这个问题的原因我没有细究，也不想细究。

### 最终解法

于是想到了 [牧羊人](https://shepherdjs.dev)，它的解法很简单，背投用的是 SVG，[代码参考](https://github.com/shipshapecode/shepherd/blob/master/src/js/components/shepherd-modal.svelte)。
