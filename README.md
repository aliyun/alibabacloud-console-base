ConsoleBase
===

> ConsoleBase → 阿里云控制台的基座

<a href="https://www.alibabacloud.com">
  <img src="https://aliyunsdk-pages.alicdn.com/icons/AlibabaCloud.svg" alt="Alibaba Cloud" />
</a>

此为 mono-repo，意在输出阿里云控制台下可以被复用的 ConsoleBase 的基础能力。

# 开发准备

1. Clone 当前项目到本地。
2. 全局安装依赖 `yarn`

# 初始化项目

初次 clone 后，需要做如下动作对项目进行初始化：

```shell
yarn boot # 将安装所有依赖，利用 yarn workspace
yarn boot:packages # 逐个 packages 下的包，比较耗时，一般 clone 后执行一次，以后便不需要再次运行
```

`boot:packages` 之所以需要是因为 `boot` 命令初始化 lerna 的时候会把 packages 下的包做 link，比如 `package/a` 引的包指向的可能是 `package/b`，这要求 `package/b` 下有构建产物 `build` 目录 `boot:packages` 便是做这个事情。