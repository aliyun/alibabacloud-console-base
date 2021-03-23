@alicloud/arms
===

> 基于 CDN 形式的 ARMS 埋点的类型封装，及相关工具方法

# WHY

1. 我用 CDN 的方式，不用 npm 包的方式
2. 我需要类型，即使 npm 包也没有类型
3. 我需要一个可以脱离 `this` 的调用方式，而原屎的 `__bl` 只能用 `__bl.xx()` 的方式
4. 我需要一个可以不用判断是否完成，不想知道 `pipe` 这个概念，直接调用
5. 我需要统一和简化 `api()` 那个方法

# 相关文档

* [ARMS 前端监控](https://yuque.antfin-inc.com/retcode/arms-retcode/readme)
* [ARMS SDK 配置项](https://yuque.antfin-inc.com/retcode/arms-retcode/ug62q7)
* [ARMS URL 参数参考](https://yuque.antfin-inc.com/retcode/arms-retcode/urlreference)
* [alife-logger] 非 CDN 形式的 bl 封装，可以参考参数定义

[alife-logger]: https://www.npmjs.com/package/alife-logger
