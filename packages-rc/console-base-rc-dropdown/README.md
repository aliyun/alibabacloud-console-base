# @alicloud/console-base-rc-dropdown

## Usage

```js
import Dropdown from '@alicloud/console-base-rc-dropdown';

<Dropdown {...props} />;
```

## APIs

props

```typescript
interface DropdownProps {
  // 内容
  trigger: string | JSX.Element | ((visible: boolean) => JSX.Element);
  header?: string | JSX.Element;
  body?: string | JSX.Element;
  footer?: string | JSX.Element;
  // 长相
  block?: boolean; // 整体的 display，默认为 inline-block
  visible?: boolean; // 下拉是否可见（受控），如果 undefined 则表明不受控
  align?: 'left' | 'right';
  width?: number;
  offset?: [number, number];
  bodyPadding?: 'both' | 'top' | 'bottom' | 'none';
  // 其他
  dropContainer?: 'inside' | 'body'; // 默认下拉节点是放在组件内部的，可以设置成 body 让它 portal 到 body 下
  // 回调
  onEsc?(): void;
  onNavUp?(): void;
  onNavDown?(): void;
  onVisibleChange?(value: boolean): void;
}
```
