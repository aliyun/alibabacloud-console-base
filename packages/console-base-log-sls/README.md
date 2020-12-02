@alicloud/console-base-log-sls
===

> ConsoleBase 专用日志记录器。

每条日志会额外记录以下参数：

* `versionOfLoader` 加载器版本，多个版本以 `~` 分隔
* `versionOfConsoleBase` console-base 主体代码的版本，同样，如果多个会以 `~` 分隔

# INSTALL

```
tnpm i @alicloud/console-base-log-sls -S
```

# API

```typescript
import sls from '@alicloud/console-base-log-sls';

sls(topic, params);
```
