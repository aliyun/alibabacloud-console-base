# @alicloud/console-one-conf

> 仅可在 OneConsole 下使用

## 和 `@alicloud/console-one-config` 的关系

* `@alicloud/console-one-config`
  + 仅对全局变量 `ALIYUN_CONSOLE_CONFIG` 的封装和类型定义
  + 不论是否 OneConsole 都可以使用，需要进行判断 `CONF.ONE` 是否为 `true`
* `@alicloud/console-one-conf`
  + 依赖 `@alicloud/console-one-config`
  + 仅适用于 OneConsole，其他下边基本无效
  + 对功能开关/灰度和渠道链接的使用做了标准化
  + OneConsole 的项目用它就可以了，不需要知道 `@alicloud/console-one-config`

## Usage

注意，这个包的输出既有直接可用的 `confFeature` 又有工厂方法 `confLinkGen`，建议做一层封装，然后应用的代码里只用自己的封装。

推荐使用 lerna 管理和发布自己的应用专属的 package。

### 封装

请封装自己应用专属的 util 或 package，以下假设你封装的是应用专属包 `@alicloud/xx-conf`：

```typescript
import CONF, {
  confFeature,
  confLinkGen
} from '@alicloud/console-one-conf';

enum EFeature {
  ...
}

const DEFAULT_LINK = { // 不要指定类型，也可以另外定义到某个文件中，它对使用 confLink 时的 key 校验很有用
  'some_lnik': '//...',
  ...
};

const [confLink, MERGED_LINK] = confLinkGen(DEFAULT_LINK); // 传入第二个参数自定义插值的方式，默认用 `[]`

export {
  LINK, // 不建议强改全局对象，这里 export 出去，且再也不要用 CONF.LINK
  EFeature,
  confFeature,
  confLink
};
```

### 功能开关判断

```typescript
import {
  EFeature,
  confFeature
} from '@alicloud/xx-conf';

const SUPPORT_SOME_FEATURE = confFeature(EFeature.SOME_FEATURE);
const SUPPORT_SOME_FEATURE_WITH_REGION = confFeature(EFeature.SOME_FEATURE_WITH_REGION, someRegion);
const SUPPORT_SOME_FEATURE_WITH_ATTRIBUTES = confFeature(EFeature.SOME_FEATURE_WITH_ATTRIBUTES, {
  attr1,
  attr2,
  ...
});
const SUPPORT_SOME_FEATURE_WITH_REGION_AND_ATTRIBUTES = confFeature(EFeature.SOME_FEATURE_WITH_REGION_AND_ATTRIBUTES, {
  region,
  attr1,
  attr2,
  ...
});
```

### 渠道链接

```typescript
import {
  confLink
} from '@alicloud/xx-conf';

const link = confLink('some_link');
const link2 = confLink('some_link_with_{id}', { // ...{id}... → ...{hello%20world}...
  id: 'hello world'
});
const link3 = confLink('some_link_with_{id}', { // ...{id}... → ...{hello world}...
  id: 'hello world'
}, true); // 出于安全考量，默认在 interpolation 中的数据在插入时是会被 encodeURIComponent，第三参数传 true 可强制不 encode
```

### 国际化中的渠道链接

可以把输出的 LINK 作为默认的国际化插值，比如使用 @ali/wind-x-intl 的场景。

```typescript
import CONF, {
  LINK
} from '@alicloud/xx-conf';
import windXIntl from '@ali/wind-x-intl';

import messages from './messages';

const {
  intl,
  intlNumber,
  intlCurrency,
  intlPercentage,
  intlDate,
  intlConst,
  intlChoices
} = windXIntl(messages, CONF.LOCALE, {
  extraValues: LINK
});

export default intl;

export {
  intlNumber,
  intlCurrency,
  intlPercentage,
  intlDate,
  intlConst,
  intlChoices
};
```
