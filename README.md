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
yarn lerna:build:local # 构建 packages 下所有的包
```
