# @alicloud/widget-utils-console
提供给 Widget 用以获取其执行环境相关信息的工具🔧包。

Utils
名称|说明|返回值
---|---|---
提供方：@alicloud/widget-utils-conosole|以下方法由 @alicloud/widget-utils-console 提供|
isOneConsole|判断当前控制台的类型是否为 one-console|boolean
getChannelLink|获取渠道链接的值|string
getChannelFeature|获取开关状态值|boolean
useCORS|是否使用 fecs 提供的 CORS 接口请求 api 数据|boolean
提供方：宿主控制台|以下方法有宿主控制台提供|
getParentUid|获取控制台主账号 id|string
getCurrentUid|获取当前账号 id|string
getAccountType|获取当前账号类型|string
getChannel|获取当前渠道 id|string
getLang|获取当前语言类型|string
getLocale|获取当前地域信息|string
getSecToken|获取 sec_token|string
getUmid|获取 umid|string
getCollina|获取 collina|string
getRegionName|获取 region 的名称|string
getZoneName|获取 可用区的名称|string
提供方：@alicloud/wiget-loader|以下方法有 @alicloud/widget-loader 提供|
getWindMessages|获取 wind 组件的多语言文案，widget loader 提供|object
getWidgetI18nMessages|获取 widget 自身的多语言文案，widget loader 提供|object
getChannelLinkList|获取 widget 的渠道链接数据，widget loader 提供|object
getChannelFeatureList|获取 widget 的功能开关数据，widget loader 提供|object
getWidgetInfo|获取 widget 自身运行时的信息，widget loader 提供|object



