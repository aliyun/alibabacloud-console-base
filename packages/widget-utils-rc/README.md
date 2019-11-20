# @alicloud/widget-utils-rc

这个仓库包含了 `React` 组件维度的工具，也就是说这些工具的本质是一些 `React` 组件，它们帮助你解决一部分业务问题。


## 安装

开发者可以拷贝粘贴下面代码到终端进行安装：
```sh
npm install @alicloud/widget-utils-rc --save
```


## 使用

我们使用 `ChannelLink` 为例，来说明我们这个工具包的使用情况。假设 widget 开发者在配置平台配置了如下的渠道链接信息：
```json
{
  "console.home": "https://home.console.aliyun.com",
  "vpc.create": "https://vpc.console.aliyun.com/vpc/{regionId}/vpcs/new"
}
```
在我们 widget 内部使用该渠道链接的地方：
```js
import { ChannelLink } from '@alicloud/widget-utils-rc'

function YourComponent(props) {
  const { activeRegionId } = props

  return (
    <div>
      最新的 Home 控制台已经上线！👏 ，请前往查看！
      <ChannelLink id="console.home">
        新版 Home 控制台地址
      </ChannelLink>
      你还可以选择去👉 
      <ChannelLink id="vpc.create" values={{ regionId: activeRegionId }}>
        创建
      </ChannelLink>
      一个专有网络 VPC
    </div>
  )
}
```

如果你觉得 `ChannelLink` 写起来太长了，你可以在导入的时候为它设置一个 `alias`：
```js
import { ChannelLink as Clink } from '@alicloud/widget-utils-rc'

// 现在你可以使用 Clink 来代替 ChannelLink
```

> 📢  &nbsp; 说明 <br /><br />
`ChannelLink` 在内部使用了 `@alicloud/widget-context` 来获取 **widget** 对应的渠道链接的数据，这与控制台有一点差别，控制台会把这些数据输出在控制台页面上，供开发者从全局变量中获取。而 **widget** 对应的这一部分数据会在它运行之前从 cdn 动态加载回来，并通过 `@alicloud/widget-context` 提供。


## API

### ChannelLink
用于渲染渠道链接，最终渲染结果是一个 **a** 标签。

参数|说明|类型|必填|默认值
---|---|---|---|---
id|渠道链接的 id|String|否|-
target|打开方式|String|否|_blank
type|渲染样式|String|否|primary
shape|渲染类型，文字链接或按钮|String|否|text
size|尺寸|String|否|small
disabled|是否禁用|Boolean|否|false
className|自定义类名|String|否|-
extra|额外的 url 信息，会添加到最终 url 的末尾|String|否|-
children|子元素|PropTypes.node|是|-
values|变量替换值|Object|否|-
url|链接的 url，指定 url 会直接使用传入的 url|String|否|-


### ChannelFeature
功能模块的容器，用于分渠道显示或隐藏某一个功能。在不传入 `deteminator` 的情况下，默认使用 `feature.status` 的值来决定是否渲染子元素。

参数|说明|类型|必填|默认值
---|---|---|---|---
id|渠道功能开关的 id|String|是|-
children|子元素|PropTypes.node|是|-
determinator|(feature) => Boolean，一个函数用于决定 children 是否最终渲染，函数会接收到与传入 id 对应的渠道开关的所有信息。在 `feature.status` 单独使用不满足需要的情况下使用|Function|否|-
