@alicloud/console-base-global
====

注意：

1. 控制台应用不要安装这个包！而是直接通过全局变量 `ConsoleBase`，但要注意做好判空保护；
2. 为避免全局变量的滥用，这个包不会直接设置和暴露全局变量，而是暴露这些接口：
    * `setGlobalVar`
    * `setProxyErrorPrompt`
    * `getProxyErrorPrompt`
3. 这个包本身不会产生全局变量，而是由 ConsoleBase 主体代码通过调用 `setGlobalVar` 生成
