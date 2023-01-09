# @alicloud/console-base-error-prompt-proxy

注意：这个包**只能**是控制台应用使用的，ConsoleBase 不会用到它。

用法和 `@alicloud/console-base-error-prompt` 基本一样。

在 ConsoleBase 未启用全局代理的时候，抛错动作由 `@alicloud/console-base-error-prompt` 直接执行（这个包将由应用打包到应用的 bundle）。

在 ConsoleBase 启用全局代理后，抛错动作由 `@ali/console-base-plugin-error-prompt` （阿里云内部包）接管，而真正的错误提示是打包在 console-base bundle 里的  `@alicloud/console-base-error-prompt` 执行的。
