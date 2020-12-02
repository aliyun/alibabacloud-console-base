@alicloud/console-one-config
===

> 仅输出对象和类型，可以不在 OneConsole 下使用（比如用在 console-base 中），但使用前必须做好判断 `ONE_CONF.one` 为 true 才是 OneConsole。

对 OneConsole 下 `window.ALIYUN_CONSOLE_CONFIG` 的封装，剔除不用的东西，纠正和明确类型。
在非 OneConsole 下同样可以得到类型一致的对象，但里边的数据都是空的。可以通过 `CONF.ONE` 是否为 `true` 判断当前是否为 OneConsole。

```sh
tnpm i @alicloud/console-one-config -S
```

```typescript
import ONE_CONF from '@alicloud/console-one-config';

// 使用 ONE_CONF
```

# 哪些优化？

* 对全局变量 `window.ALIYUN_CONSOLE_CONFIG` 只读一次，避免全局变量引起的安全漏洞
* 明确 `ONE_CONF` 的类型为优化后的 `ConsoleOneConfig`
* 剔除永远不会用到的输出
* 纠正类型，避免 `undefined`

更多优化可自行查看类型定义。

## `STATIS_API`

设计的无比狗屎，基本上可以认为是由**脚**设计出来的。它输出的原屎格式是 `{ code, data?, message? }`，使用时需要非常小心，因为很容易出错，
我看到有人用了一连串的 `&&` 来做保护。实际上这一层逻辑完全可以在 OneConsole 输出前进行剥离，我多次提出，但总以**稳定性**为借口不作为，稳定得令人发指。

所以，这里提取了 `data` 作为直接输出，并更名为 `API_RESULT`。

```typescript
STATIS_API: {
  a: {
    code: '200',
    data: ...
  },
  b: {
    code: '200',
    data: null // null 是正常的返回，不忽略
  },
  c: { // 由于 data 是 undefined，所以忽略
    code: '200'
  },
  d: {
    code: 'fucked',
    data: '即使有 data，但 code 是失败，也忽略',
    message: '...'
  }
}
// 将变成
API_RESULT: {
  a: ...,
  b: null
}
```

## OPEN_STATUS

改成了正确的格式，布尔是布尔，数值是数值。

## REGIONS

对 REGIONS 的类型做了精简。
