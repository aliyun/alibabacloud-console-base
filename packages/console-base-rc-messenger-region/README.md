@alicloud/console-base-rc-messenger-region
===

ConsoleBase 组件 - 对 region messenger 的组件化封装，提升开发体验

让控制台应用项操作本地组件一样，控制顶栏中的全局地域选择器组件。

# INSTALL

```bash
npm  i -S @alicloud/console-base-rc-messenger-region
```

# USAGE

```typescript jsx
import React, {
  useState
} from 'react';

import MessengerRegion from '@alicloud/console-base-rc-messenger-region';

export default function MyMessengerRegion(): JSX.Element {
  // 默认 regionId 可以为空，也可以设置应用下支持的某个值
  // **注意**：
  // 
  // 1. 你也可以把值记录在应用的顶层 state 中，不一定需要 useState，但一定要有个地方记它
  // 2. 当路由中有 regionId 的话，需要设过来
  // 3. 这里只是一个例子，根据应用自己的需要修改
  const [stateRegionId, setStateRegionId] = useState<string>('');
  const handleRegionChange = useCallback(regionId => {
    setStateRegionId(regionId);
    // 这里写跳转路由逻辑
  }, []);
  
  return <MessengerRegion {...{
    // 数据
    regionId: stateRegionId, // string 「半」受控的 regionId，需要通过 onChange 进行回填
    // /**
    //  * 当前业务支持的 region 列表
    //  * - 如果不传入，表示由组件自行加载数据（极力不推荐）
    //  * - 如果传入，即使是一个空数组，表示由业务方自行控制自己的 region 列表（推荐）
    //  */
    // regions: [{ id, name }, ...],
    // resourceCount: { [regionId]: 123, ..}, // 设置对应资源数
    // /**
    //  * 不传 regions 的时候，组件会自行获取 region 列表，注意，组件只能获取到「通用」的 region 列表，它可能包含了
    //  * 当前产品不支持的 region。这种情况下，业务方可以通过 legacyRegionIds 来告知组件。
    //  *
    //  * 如何对支持或不支持的 region 做配置：
    //  *
    //  * 你可以对「所有」的 region 做完全定义，也可以通过通配符做增量或减量定义。
    //  *
    //  * - `*`，白名单：支持「所有」可以拿到的默认 region，它可以避免你「必须」写全所有的 region；
    //  * - `!eu-*` 黑名单：不支持「欧洲」的所有 region。
    //  *
    //  * 注意：
    //  * 1. 如果设置了黑名单，则命中黑名单的将不支持，且无法被白名单反转；
    //  * 2. 如果设置了白名单，则「只有」命中白名单的才会被支持。
    //  *
    //  * 所以，除非你明确知道要支持那几个 region，否则请在添加的白名单之前都加上 `*`，举例：
    //  * 
    //  * - ['cn-hangzhou', 'cn-beijing', 'cn-shanghai'] 仅支持这几个明确的 region
    //  * - ['*', 'cn-hangzhou-finance'] 支持所有的「通用」region，以及 `cn-hangzhou-finance`
    //  * - ['cn-*', '!cn-xx'] 支持所有的 cn region，但不包括 cn-xx
    //  */
    // legacyRegionIds, // string[]
    // 展示
    // visible, // boolean 是否可见，不传即为可见（因为既然你已经用了此组件）
    // disabled, // boolean 是否禁用，可在应用详情页上开启
    // global, // boolean 展示成「全球」
    // noGroup, // boolean 不对地域进行分组（除非必要，不推荐设置，开启此选项需报备）
    // 事件
    onChange: setStateRegionId // (regionId: string, regionName: string, correctedFrom?: string) => void
  }} />;
}
```

注意：

1. 确保你页面同时只能有一个该组件的实例，否则可能引起奇怪的现象
2. 如果你初始化了该组件，表示你需要全局 Region 切换，所以只要初始化，且 visible 不是 false，则顶栏 Region 将可见
3. 该组件被销毁的时候，顶栏组件会隐藏