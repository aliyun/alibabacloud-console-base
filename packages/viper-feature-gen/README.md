@alicloud/viper-feature-gen
===

阿里云控制台（接入 viper）功能开关检查（工厂方法）

> 💥 OneConsole 控制台可以使用 [@alicloud/console-one-conf]，它整合了 OneConsole 下
> * `window.ALIYUN_CONSOLE_CONFIG` 这个全局对象的类型定义和纠正
> * `confFeature()` 利用 `@alicloud/viper-feature-gen` 标准化了功能开关加灰度的使用
> * `confLinkGen()` 标准化了渠道链接的使用方式，在 TS 下可以对传入的 key 做类型约束（需要传入默认的所有链接兜底），避免漏写和写错
> 墙裂推荐 OneConsole 的控制台直接使用 [@alicloud/console-one-conf] 而不是这个 `@alicloud/viper-feature-gen`

# WHY

[新版 viper](https://vipernew.aliyun-inc.com) 提供了「渠道功能开关」配置，支持对开关增加用户类型和区域黑白名单的配置，并且提供了「功能灰度」配置。

* 功能开关，可以设置用户类型、区域黑白名单
* 功能灰度，与开关平行，可以设置用户百分比、用户白名单和用户标签白名单

功能开关的用户类型在后端公共库里已经集成，不需要调用者关心；然而区域对于每个产品来说有可能是不一样的（比如 OSS 的区域都是以 `oss-` 打头的），而且区域是需要透传到前端的，所以还需要各个业务自行处理。

功能灰度经过后端公共库处理，会吐出仅含 `true/false` 的一个对象，它可以对功能开关做补充。然而只有 `false` 值对功能开关的补充是有效的。

这里提供的是一个「生产方法」，因为不能确定功能开关是如何透传至前端的。

## 功能开关

功能开关在页面的输出是这样的 JSON 对象（OneConsole 下对应的是 `window.ALIYUN_CONSOLE_CONFIG.CHANNEL_FEATURE_STATUS`）：

```json
{
  "alarm-rules": {
     "status": true,
     "attribute": {
        "regions": [],
        "customAttrs": {}
     }
  },
  ...
}
```

## 功能灰度

> 吐槽：OneConsole 的数据吐出命名方式真的是令人呸服...

功能灰度的页面输入也是一个 JSON 对象，不过仅包含 `true/false` 值（OneConsole 下对应的是 `window.ALIYUN_CONSOLE_CONFIG.FEATURE_STATUS`）：

```json
{
  "alarm-rules": true,
  ...
}
```

## 开关 + 灰度的判断逻辑

1. 如果功能开关和灰度都没有配置，则 `true`
2. 如果仅配置了灰度，则返回灰度值
3. 如果都配置，且开关和灰度其中之一为 `false`，返回 `false`
4. 如果开关状态为 `true`，灰度未配置或也为 `true`，需要判断 region 或额外属性，它们的判断逻辑是一样的都是混合黑白名单

# EXAMPLE

自定义项目的 `conf/feature` 模块，如 `src/conf/feature.js`：

> 最佳实践：杜绝硬编码到处飞，feature 字符串定义到这里，并加以说明。

```typescript
import viperFeatureGen from '@alicloud/viper-feature-gen'; // 在你的代码中应该只出现这里一次

export default viperFeatureGen(VIPER_功能开关_输出, VIPER_灰度_输出);

export enum EFeature {
  WHAT_OP = 'what:op' // 什么什么功能，需不需要判断 region
}
```

在你的模块中使用：

> 最佳实践：给 src 配置 webpack alias，个人习惯用 `:`。

```typescript
import confFeature, {
  EFeature
} from ':/conf/feature';

// ...

// 进行判断
const FEATURE_WHAT_OP_AVAILABLE = confFeature(EFeature.WHAT_OP); // 不关心 region 或其他属性
const FEATURE_XX_OP_AVAILABLE = confFeature(EFeature.WHAT_OP, region); // 关心 region，传入的 region 只会在有 regions 配置的情况下有效（否则跟不传效果一样）
const FEATURE_XX_OP_AVAILABLE = confFeature(EFeature.WHAT_OP, { // 关心其他属性
  attr1
});
const FEATURE_XX_OP_AVAILABLE = confFeature(EFeature.WHAT_OP, { // 关心 region 和 其他属性，传入的 region 只会在有 regions 配置的情况下有效（否则跟不传效果一样）
  region,
  attr1
});

// ...
```

# API

`viperFeatureGen` 的函数签名为 `function viperFeatureGen(FEATURE_CONF: Record<string, IFeatureItem> = {}, GRAY_CONF: Record<string, boolean> = {}): IFnFeatureCheck`：

* `FEATURE_CONF: Record<string, IFeatureItem>` 功能开关配置，「必需」OneConsole 的项目可以统一用 `window.ALIYUN_CONSOLE_CONFIG.CHANNEL_FEATURE_STATUS`，非 OneConsole 的项目根据自身 HTML 的输出调整自己的代码。
* `GRAY_CONF: Record<string, boolean>` 灰度配置，「必需」OneConsole 的项目可以统一用 `window.ALIYUN_CONSOLE_CONFIG.FEATURE_STATUS`（再次吐槽此狗屎命名），非 OneConsole 的项目根据自身 HTML 的输出调整自己的代码。

再次提醒 `viperFeatureGen` 是一个工厂方法（虽然在一个项目中可能仅用一次），它生产出来的方法的签名如下：

```typescript
interface IFnFeatureCheck {
  (key: string): boolean;
  (key: string, region: string): boolean;
  (key: string, attributes: IFeatureCheckAttributes): boolean;
}
```

返回值：

* `true` 支持功能（viper 上没有对应的配置也表示支持功能）
* `false` 不支持功能

[@alicloud/console-one-conf]: https://npm.alibaba-inc.com/package/@alicloud/console-one-conf
