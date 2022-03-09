@alicloud/console-base-global
====

> ConsoleBase 唯一官方指定全局变量... 的 API

！！控制台应用不要安装这个包！！

注意：

1. 控制台应用请直接通过全局变量 `window.ConsoleBase`，注意做好判空保护；
2. 为避免全局变量的滥用，这个包不会直接设置和暴露全局变量，而是暴露这些接口：
    * `setGlobalVar`
    * `set/getProxyErrorPrompt`
    * `set/getProxyFetcher`
3. 这个包本身不会产生全局变量，而是由 ConsoleBase 主体代码通过调用 `setGlobalVar` 生成

获取和设置全局变量下的某属性的方法，getter 和 setter 的策略有所区别。

- setter - 如果 window 下全局对象已设置，设到全局变量；未设置则设到 GLOBAL_VAR_LOCAL，所以此时用 getGlobalVar().xx = x
- getter - 仅获取 window 下全局对象中的值；若全局对象未设置，将可能得到 undefined，此时用 getGlobalVarFromWindow()?.xx