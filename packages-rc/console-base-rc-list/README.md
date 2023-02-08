# @alicloud/console-base-rc-list

> ConsoleBase 组件 - List UL / OL

一个极其简单的 List 容器，专门渲染 UL / OL，将内容转换为列表，带基础样式。

## INSTALL

```shell
tnpm i @alicloud/console-base-rc-list -S
```

## Usage

```typescript jsx
import List from '@alicloud/console-base-rc-list';

// 渲染 UL
<List>
  <a href="//www.aliyun.com" target="_blank" rel="noopener noreferrer">www.aliyun.com</a>
  <a href="//www.alibaba.com" target="_blank" rel="noopener noreferrer">www.alibaba.com</a>
</List>

// 渲染 OL
<List ordered>
  <a href="//www.aliyun.com" target="_blank" rel="noopener noreferrer">www.aliyun.com</a>
  <a href="//www.alibaba.com" target="_blank" rel="noopener noreferrer">www.alibaba.com</a>
</List>

// 数组通过 map 渲染 UL
<List>
  {['//www.aliyun.com', '//www.alibaba.com'].map(v => <a key={v} href={v} target="_blank" rel="noopener noreferrer">{v}</a>)}
</List>
```
