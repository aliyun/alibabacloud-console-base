@alicloud/logger-sls
===

> 阿里云日志服务 SLS Web Tracking 日志记录方法的工厂，以及工厂的工厂。
> 工厂是因为，SLS 要求必须要有 `project` 及对应的 `endpoint` 和 `logstore`。

# INSTALL

```
tnpm i @alicloud/logger-sls -S
```

# API

```typescript
export default function createLogger(options: FactoryOptions): LogFn;
export function createLoggerFactory(factoryDefaultParams: TDefaultParams): FactoryFn;
```

其中 `FactoryOptions` 的类型及解释如下：

```typescript
interface FactoryOptions {
  /**
   * logstore 所在的 SLS project
   */
  project: string;
  /**
   * project 的外网访问域名，在 SLS 控制台 project 概览页可以找到，
   * 如 `cn-hangzhou.log.aliyuncs.com`（仅跟 project 所在地域有关）
   */
  endpoint: string;
  /**
   * SLS project 下的 logstore，必须开通 Web Tracking 功能，日志记录的存储点
   */
  logstore: string;
  /**
   * APIVersion，不知所谓的参数，但必需，说是保留字段，
   * 默认 `0.6.0`（文档中的版本号）
   */
  apiVersion?: string;
  /**
   * 默认参数，避免每次都要传，可以是静态数据或产生动态数据的方法，这些参数可以覆盖自动记录的参数，
   * 但会被日志方法的第二个参数 `params` 中对应的字段覆盖
   */
  defaultParams?: Record<string, any> | (() => Record<string, any>);
}
```

`TDefaultParams` 的类型可以是 `Record<string, any>`，也可以是 `() => Record<string, any>` 方法。

你可以：

1. 使用 `createLogger` 创建自己的专属 log 方法，直接在项目中使用
2. 使用 `createLoggerFactory` 创建带更多默认参数的 `createLogger` 方法（通常你需要封成一个 npm 包）

# 创建专属 SLS Logger

对于一个项目，一般你只需要一个 log 方法。不要在使用的地方进行创建，你需要一个唯一的实例。

比如在你的 `util` 下，新建一个文件叫 `log-sls.ts`：

```typescript
import createLogger from '@alicloud/logger-sls';

export default createLogger(options);
```

## 自动记录的参数

### SLS 自动记录的数据

* `__source__` IP
* `__tag__:__client_ip__` IP
* `__tag__:__receive_time__` 日志落库时间，不是毫秒时间戳，而是秒，需要乘以 1000 后再 `new Date`

以上三个不在请求中，应该是落库的时候写的；还有一个在请求中的参数 `APIVersion`，它的值一般就是 `0.6.0`。

### `@alicloud/logger-sls` 自动记录的数据

为了区分用户传的参数和「默认」参数，这里默认的参数从 `1.0.0` 开始该成全大写的，之前是小骆驼格式。

这里为每一条日志自动记录浏览器相关的数据以及记录日志的时间，并对其进行分组。

参数名 | 含义 | 说明
--- | --- | ---
`LOCATION_HOST` | 当前的 `window.location.host` | 
`LOCATION_PATHNAME` | 当前的 `window.location.pathName` | 
`LOCATION_HASH` | 当前的 `window.location.hash` | 
`TIME` | 当前的 `Date.now()` | 日志提交的时间戳
`GROUP` | 日志分组，`DEBUG | LOG | INFO | WARN | ERROR | FATAL | BIZ` | 默认 `LOG`

# 创建一个带更多默认参数的工厂

针对特定的场景（比如阿里云控制台体系），需要记录用户相关的信息，这个时候，你需要一个新的 `createLogger`，你可以封装特定的 npm 包，如 `@alicloud/console-logger-sls`，它的输出可能是这样的：

```typescript
import {
  createLoggerFactory
} from '@alicloud/logger-sls';

function getDefaultParams() {
  return {
    userId: 'xx',
    userName: 'xx'
  };
}

export default createLoggerFactory(getDefaultParams);
```

而使用者跟直接是用 `createLogger` 一样，不同的是，默认参数中会多出 `userId` 等参数。

# log 方法

无论通过 `createLogger` 直接得到的 log 方法，还是通过 `createLoggerFactory` 间接得到的 `log`，它们签名是一样的：

```typescript
type TFnLogGrouped = <P extends {}>(topic: string, params?: P) => void;

export interface IFnLog {
  <P extends {}>(topic: string, params?: P, group?: string): void;
  debug: TFnLogGrouped;
  log: TFnLogGrouped;
  info: TFnLogGrouped;
  warn: TFnLogGrouped;
  error: TFnLogGrouped;
  fatal: TFnLogGrouped;
  biz: TFnLogGrouped;
}
```

这里对 `params` 做了泛型定义，是为了希望约束参数的场景。

## 使用 log 方法

假设 `:` 是你项目下 `src` 的 alias。

```typescript
import log from ':/util/log-sls';

log(topic);
log(topic, {
  p1,
  p2
});
log<ISomeParams>(topic, { ... });
```
