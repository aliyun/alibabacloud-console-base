# @alicloud/console-fetcher-interceptor-res-risk

> `@alicloud/console-fetcher` 的响应拦截器 - 风控。依赖 `@alicloud/console-fetcher-interceptor-res-biz` 的前置拦截。其中包含旧版的主账号风控、新版的主账号风控、新版的子账号风控三部分逻辑

## INSTALL

```shell
tnpm i @alicloud/console-fetcher-interceptor-res-biz @alicloud/console-fetcher-interceptor-res-risk -S
```

注意，风控拦截器依赖 `@alicloud/console-fetcher-interceptor-res-biz` 对响应进行拦截并抛出业务级别的 Error。

## API

```typescript
import createFetcher, {
  Fetcher
} from '@alicloud/fetcher';
// import interceptors 1
import interceptBiz from '@alicloud/console-fetcher-interceptor-res-biz'; // 必需在风控拦截之前
// import interceptors 2
import interceptRisk from '@alicloud/console-fetcher-interceptor-res-risk';
// import interceptors 3

const fetcher: Fetcher = createFetcher();

// ... add interceptors 1
interceptBiz(fetcher);
// ... add interceptors 2
interceptRisk(fetcher, { // 自定义属性，均可选
  // // 风控错误码
  // CODE_NEED_VERIFY?: string; // 风控 - 需要用验证码进行二次验证
  // CODE_FORBIDDEN?: string; // 风控 - 中断业务流程
  // CODE_INVALID_INPUT?: string; // 验证码错误
  // // 风控验证类型
  // BY_SMS?: string; // 通过短信验证
  // BY_EMAIL?: string; // 通过邮箱验证
  // BY_MFA?: string; // 通过 MFA 设备验证
  // // URL 设置
  // URL_SEND_CODE?: string; // 必须设置，发送验证码接口地址（默认的好像就是这个地址）
  // URL_SETTINGS?: string; // 设置用户风控验证方式地址
  // // 发送验证码后的冷却时间
  // COOLING_AFTER_SENT?: number; // 发送验证码成功后的冷却时间（秒）
  // COOLING_AFTER_SEND_FAIL?: number; // 发送验证码失败后的冷却时间（秒）
});
// ... add interceptors 3

export default fetcher
```
