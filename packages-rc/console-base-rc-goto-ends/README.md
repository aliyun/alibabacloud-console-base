# @alicloud/console-base-rc-goto-ends

置顶置底按钮。

注意：尽量不要放在 `overflow: auto|scroll` 的容器下，因为 `display: absolute` 的元素会受到父容器的滚轴影响，可以在此容器之外套一层，并设置器 `position: relative`，`container` 和 `GotoEnds` 放在同一个父容器下。

## Usage

```typescript
import GotoEnds from '@alicloud/console-base-rc-goto-ends';

<GotoEnds {...props} />
```

### props

名词+类型 | 说明
:-- | :--
`container: HTMLElement | null;` | 要监测的会滚动的容器，其 `overflow` 一般为 `auto` 或 `scroll`，注意，它不一定是组件的父容器（尽量不要是）
`containerInner?: HTMLElement | null;` | 有的时候，容器是固定高度的，内部可能会有一个单独的内容容器，它的高度会变化
`offsetX?: number;` | 自定义距离父容器右下角的 x 方向的位移，默认 12
`offsetY?: number;` | 自定义距离父容器右下角的 y 方向的位移，默认 12
`onGotoTop?(): void;` | 点击置顶按钮后的回调
`onGotoBottom?(): void;` | 点击置底按钮后的回调
