# @alicloud/base64

Base64 编解码，在原生 `btoa`（Base64 编码） 和 `atob`（Base64 解码）的基础上，添加了 unicode 支持，并支持生成 URI 友好的 Base64 串。

## INSTALL

```shell
tnpm i @alicloud/base64 -S
```

## APIs

```typescript
import {
  encode,
  decode
} from '@alicloud/base64';

const a = encode(...);
const b = encode(..., true);
const c = decode(...);
```
