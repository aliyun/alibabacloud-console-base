@alicloud/console-fetcher-proxy
===

注意：这个包**只能**是控制台应用使用的，ConsoleBase 不会用到它。

用法和 `@alicloud/console-fetcher` 基本一样。

在 ConsoleBase 未启用全局代理的时候，抛错动作由 `@alicloud/console-fetcher` 直接执行（这个包将由应用打包到应用的 bundle）。

在 ConsoleBase 启用全局代理后，抛错动作由 `@alicloud/console-base-plugin-fetcher` 接管，而真正的错误提示是打包在 console-base bundle 里的  `@alicloud/console-fetcher` 执行的。

`@alicloud/console-fetcher`: https://npm.alibaba-inc.com/package/@alicloud/console-fetcher
`@alicloud/console-base-plugin-fetcher`: https://npm.alibaba-inc.com/package/@alicloud/console-base-plugin-fetcher
