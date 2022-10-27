# @alicloud/console-base-rc-messenger-resource-group

ConsoleBase 组件 - 对 resource group messenger 的组件化封装，提升开发体验

让控制台应用项操作本地组件一样，控制顶栏中的全局资源组选择器组件。

## INSTALL

```shell
npm  i -S @alicloud/console-base-rc-messenger-resource-group
```

## Usage

```tsx
import React, {
  useState
} from 'react';

import MessengerResourceGroup from '@alicloud/console-base-rc-messenger-resource-group';

export default function MyMessengerResourceGroup(): JSX.Element {
  // 默认 resurceGroupId 可以为空，也可以设置应用下支持的某个值
  // **注意**：
  // 
  // 1. 你也可以把值记录在应用的顶层 state 中，不一定需要 useState，但一定要有个地方记它
  // 2. 当路由中有 resurceGroupId 的话，需要设过来
  // 3. 这里只是一个例子，根据应用自己的需要修改
  const [stateResourceGroupId, setStateResourceGroupId] = useState<string>('');
  const handleResourceGroupChange = useCallback(resurceGroupId => {
    setStateResourceGroupId(resurceGroupId);
    // 这里写跳转路由逻辑
  }, [setStateResourceGroupId]);
  
  return <MessengerResourceGroup {...{
    // 数据
    resurceGroupId: stateResourceGroupId, // string 「半」受控的 resurceGroupId，需要通过 onChange 进行回填
    // resourceCount, // Record<string, number>
    // 展示
    // visible, // boolean
    // disabled, // boolean
    // noDefault, // boolean
    // 事件
    // onChange // (id: string, displayName: string, name: string) => void
  }} />;
}
```

注意：

1. 确保你页面同时只能有一个该组件的实例，否则可能引起奇怪的现象
2. 如果你初始化了该组件，表示你需要全局 ResourceGroup 切换，所以只要初始化，且 visible 不是 false，则顶栏 ResourceGroup 将可见
3. 该组件被销毁的时候，顶栏组件会隐藏
