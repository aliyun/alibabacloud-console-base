@alicloud/console-conf-link-factory
===

渠道链接标准生产工厂

注意：OneConsole 应用请直接使用 `@alicloud/console-one-conf`

# 如何使用

## 创建 `confLink` 方法

```typescript
import confLinkFactory from '@alicloud/console-conf-link-factory';

import defaultLink from './default-link';

export default confLinkFactory(defaultLink);
```

注意：默认 link 中的插值是 `[...]`，这意味着链接的值可能是这样 `//....com/path/[param1]?p=[param2]`，你可以在调用 `confLinkFactory` 的时候传第二个参数修改成你喜欢的方式（目前不支持多种类型）。

请一定传一个在你应用下全量的链接 `key-value` 对象，这有如下好处：

1. 你若使用的是 TS，则不可能传错 key，传错则报错
2. 即使没有 viper 的输出，你的应用也是完整可运行的
3. 你大可不必一定在 Viper 上写全部的链接（当然写全更好）

## 使用 `confLink` 方法

```typescript
import confLink from 'path-to-conf-link';

// 某个地方
const link = confLink('xxx:yyy'); // TS 下这里绝不会写错
const link2 = confLink('xxx:yyy_{id}', {
  id: 'xxx' // 带插值
});
```

# 最佳实践

* 在应用中有一份完整的链接兜底
* 链接的 `key` 遵循 `snake_case`，如果有 `namespace` 的概念，可以考加两条下划线如 `namespace__xx_yy`
* 链接的 `key` 需要能够反映这个链接个功能，更要反映它需要的插值参数，比如 `product__document_[id]`，表明它是产品的文档地址，且需要参数 `id`