# Widget-Loader
Widget Loader 是用于在运行时动态加载 widget 到当前环境来执行的加载器。


## 优点
1. 简化 widget 使用，无须安装；
2. 天然 code splitting，有助于提升性能；
3. 支持多实例，单次加载可配置。

## 安装

### npm
```sh
npm install @alicloud/widget-loader --save
```

## 使用
**utils/configLoader.js**
```js
import createLoader from '@alicloud/widget-loader'

// 使用 @alicloud/widget-loader 暴露的工厂函数实例化一个加载器
export default createLoader()
```

**需要加载使用 widget 的文件**
```js
import loadWidget from '../utils/configLoader'

// ⚠️⚠️⚠️
// 不要把 loadWidget 放到组件的 render 函数中执行，
// 而对于 function component 则不要放到其函数体执行。
const Widget = loadWidget({
  id: 'widgetId',
  version: '1.x'
})

function YourComponent() {
  return (
    <Widget />
  )
}
```


## API
### createLoader
参数|说明|类型|必填|默认值
---|---|---|---|---
dependencies|提供 widget 所需的额外的运行时依赖，如果提供此参数，它的值会被合并到默认值中|Object|否|react, react-dom,prop-types,axios
windRuntime|加载 wind-runtime 时的参数，不需要 wind-runtime 可以传入 null|Object|否|-
suspense|React Suspense 相关参数，在 widget 加载时使用，用户可自定义其 fallback 参数，fallback 默认使用 widget 官方提供的骨架屏|Object|否|{ fallback: '@alicloud/widget-skeleton' }
lazy|是否懒加载 widget|Boolean|否|true
host|widget 资源所在的 cdn 地址|string|否|https://g.alicdn.com
configHost|widget 配置所在的 cdn 地址|string|否|https://cws.alicdn.com


> ### 非 OneConsole 环境
> 在非 OneConsole 环境下，开发者需要在 `dependencies` 参数中提供该环境的 `@alicloud/widget-utils-console` 的如下方法的实现。
> 参数|说明|类型|必填|默认值
> ---|---|---|---|---
> getLocale|获取 locale|Function|是|() => 'zh-CN'
> getChannel|获取渠道 ID|Function|是|() => 'OFFICIAL'
> getCurrentUid|获取当前账号 uid|Function|是|() => '00'
> getParentUid|获取当前主账号 uid|Function|是|() => '00'
> getAccountType|获取当前账户类型|Function|是|() => 'main'
> getLang|获取当前语言环境|Function|是|() => 'zh'
> getRegionName|获取 region 的名称，入参为 regionId|Function|是|(id) => id
> getZoneName|获取可用区名称，入参为 zoneId|Function|是|(id) => id


### loadWidget
参数|说明|类型|必填|默认值
---|---|---|---|---
widgetOptions|当前加载 widget 的相关信息，具体参见下面 widgetOptions|Object|是|-
loadOptions|当前加载 widget 时的一些加载配置，可选参数，如果不传则默认使用 loader 的配置，如果传入则覆盖 loader 配置，具体参见下面的 loadOptions|Object|否|继承 loader 的配置


### widgetOptions 配置参数
参数|说明|类型|必填|默认值
---|---|---|---|---
id|widgtId|String|是|-
version|所需 widget 的大版本号或具体版本号(如：1.x 或 1.0.0)|String|是|-


### loadOptions 配置参数
参数|说明|类型|必填|默认值
---|---|---|---|---
suspense|React Suspense 相关参数，在 widget 加载时使用，用户可自定义其 fallback 参数，默认继承 loader 同名参数|Object|否| loader 同名参数 suspense
lazy|懒加载|Boolean|否|loader 同名参数 suspense


## 示例
### 指定版本
Widget 有一套版本管理机制，可由 widget 的开发者在 widget 管控平台配置其版本信息，`widget-loader` 会在加载任意 widget 之前先行加载该版本信息，然后再去加载对应版本的 widget 资源，这样可以确保 `widget-loader` 所获取到的资源都是最新的。如果 widget 的使用者出于某种需要，要求明确指定 `widget-loader` 所获取资源的版本，也可以通过指定参数来实现。
```js
const Widget = loadWidget({
  id: 'widgetId',
  version: '1.0.0' // 不推荐，若非必要请勿使用具体版本号。推荐 1.x ，这种指定大版本且能获取小版本更新的加载方式。
})
```

### 立即载入
widget loader 默认会对 widget 执行懒加载的策略，即只在 widget 真正需要渲染的时候再去加载。开发者也可以通过配置禁止这种策略。
```js
const Widget = loadWidget({
  id: 'widgetId',
  version: '1.x'
}, {
  lazy: false // 不使用懒加载
})
```


### 预发资源
如果开发者需要加载预发环境的 widget ，可以通过绑定 **host** 实现：
```sh
10.101.73.189 g.alicdn.com
```

