@alicloud/u2f-api
===

> 在浏览器中使用的 U2F API，用于与 FIDO U2F 硬件设备交互。

# INSTALL

```
tnpm i @alicloud/u2f-api -S
```

# U2F API 浏览器支持
U2F API 目前支持的浏览器有：

- Google Chrome 38及以上版本
- Opera 40及以上版本
- Mozilla Firefox 57及以上版本


# API

```typescript
export declare function register(registerRequests: RegisterRequest | ReadonlyArray<RegisterRequest>, signRequests: SignRequest | ReadonlyArray<SignRequest>, timeout?: number): Promise<RegisterResponse>;
export declare function register(registerRequests: RegisterRequest | ReadonlyArray<RegisterRequest>, timeout?: number): Promise<RegisterResponse>;
export declare function sign(signRequests: SignRequest | ReadonlyArray<SignRequest>, timeout?: number): Promise<SignResponse>;
export declare function isSupported(): Promise<boolean>;
export declare function ensureSupport(): Promise<void>;

// 当前环境是否支持 U2F
const isU2FSupported = await u2fApi.isSupported();

// 绑定 U2F
const {
  clientData,
  registrationData
} = await u2fApi.register({
  version: u2fVersion,
  appId: u2fAppId,
  challenge: u2fChallenge
}, U2F_TIMEOUT);

// 验证 U2F
const {
  clientData,
  keyHandle,
  signatureData
} = await u2fApi.sign({
  version,
  appId,
  challenge,
  keyHandle: u2fKeyHandle
}, U2F_TIMEOUT);
```
