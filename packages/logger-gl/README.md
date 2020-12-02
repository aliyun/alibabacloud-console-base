@ali/logger-gl
===

封装黄金令箭，简化黄金令箭的使用。

申请黄金令箭，去这里：<http://log.alibaba-inc.com/track/index.htm#/apply/gold>。

# INSTALL

```
tnpm i @ali/logger-gl -S
```

# API

## `log(logKey: string, mode?: EGlMode, params?: TParams, method: TMethod = 'GET')`

黄金令箭页面上有个功能叫「生成埋点代码」，会给出以下代码样例，这里的 `log` 方法是对这些代码样例的简单封装，唯一的差别是 `params` 只允许传对象而不是字符串（这里会做编码）。

```
import {
  EGlMode,
  log
} from '@ali/logger-gl';

log('/....');
log('/....', EGlMode.CLICK);
log('/....', EGlMode.CLICK, {
  ...
});
log('/....', EGlMode.CLICK, {
  ...
}, 'POST');
```

## `createLogger<P>(options: IOptions)`

其中 `IOptions` 定义如下：

```typescript
interface IOptions {
  /**
   * 业务码
   */
  bizCode: string;
  /**
   * 场景码
   */
  scene: string;
  /**
   * 令箭码
   */
  glKey: string;
  /**
   * 触发方式
   */
  mode?: EGlMode;
  /**
   * HTTP 请求方式
   */
  method?: TMethod;
  /**
   * 默认参数，避免每次都要传，可以是静态数据或产生动态数据的方法
   */
  defaultParams?: TDefaultParams;
}
```

新建黄金令箭时，需要提供三个配置，层级如下：

```
业务（bizCode）
  └─ 业务场景（scene）
     └─ 黄金令箭（glKey）
```

创建一个针对业务场景的黄金令箭方法，调用者只关心传入什么样的参数（如果不需要额外的参数，创建时不传入泛型即可）。

```typescript
import createLogger from '@ali/logger-gl';

interface IParams {
  p1: string;
  p2: number;
}

// 这里返回一个函数，在需要的地方引入并使用即可，不建议创建了之后马上在同一个文件中使用
const log = createLogger<IParams>({
  bizCode, // 必填，业务码
  scene, // 必填，场景码
  glKey, // 必填，令箭码
  mode, // 可选，触发方式，默认 `OTHER`
  defaultParams // 可选，对象或返回对象的方法
});

// 使用这个特定 log 方法的时候可以很明确的知道需要传哪些参数，多传少传或类型不匹配，TS 都会编译失败
log({
  p1: 'p1',
  p2: 2
});
```
