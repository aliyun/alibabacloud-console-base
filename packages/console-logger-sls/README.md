@alicloud/console-logger-sls
===

> 阿里云控制台专用的 SLS 工厂方法。

更多信息可以参考 `@alicloud/logger-sls`，这里只是利用它「工厂的工厂」创建了一个日志工厂方法。

# INSTALL

```
tnpm i @alicloud/console-logger-sls -S
```

# API

```typescript
import createLogger from '@alicloud/console-logger-sls';

export default createLogger(options);
```

# 关于合规

有规定说日志不出境，所以国外的 SLS 是不应该记录到中国地域的 `endpoint` 的，这个逻辑在这里进行了封装：

如果传入的 `endpoint` 是 `cn-` 打头的，那末，在控制台渠道为 `INTL/SIN/JP` 的时候，便不会发送日志。

# 默认记录的参数

比之 `@alicloud/logger-sls` 中默认记录的参数，这里还记录了以下控制台场景下的专属内容：

* `channel` - 渠道
* `uid` - 当前用户 ID
* `uidMain` - 当前用户主账号 ID
* `locale` - 当前 locale