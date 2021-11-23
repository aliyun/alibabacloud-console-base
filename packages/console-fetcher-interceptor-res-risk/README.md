@alicloud/console-fetcher-interceptor-res-risk
===

> `@alicloud/console-fetcher` 的响应拦截器 - 风控。依赖 `@alicloud/console-fetcher-interceptor-res-biz` 的前置拦截。其中包含旧版的主账号风控、新版的主账号风控、新版的子账号风控三部分逻辑。

# INSTALL

```
tnpm i @alicloud/console-fetcher-interceptor-res-biz @alicloud/console-fetcher-interceptor-res-risk -S
```

注意，风控拦截器依赖 `@alicloud/console-fetcher-interceptor-res-biz` 对响应进行拦截并抛出业务级别的 Error。

# API

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
  // 从错误 data 中获取对应的信息
  // DATA_PATH_VERIFY_TYPE?: string; // 如何从原始返回中获取（旧版）主账号的风控类型
  // DATA_PATH_VERIFY_DETAIL?: string; // 如何从原始返回中获取（旧版）主账号风控展示信息（邮箱或手机）
  // DATA_PATH_VERIFY_CODE_TYPE?: string; // 如何从原始返回中获取 （旧版）主账号风控的风控码
  // DATA_PATH_VALIDATORS?: string; // 如何从原始返回中获取新版子账号的风控信息
  // DATA_PATH_VERIFY_URL?: string; // 新版主账号风控，如何从原始返回中获取集团会员平台的核身 URL，将嵌入在 iframe 里面
  // DATA_PATH_USER_ID?: string; // 新版子账号风控，如何从原始返回中中获取子账号 ID
  // DATA_PATH_NEW_VERIFY_CODE_TYPE?: string; // 新版子账号风控，如何从原始返回中获取子账号风控的风控码
  // // 从返回的 fetcher config 中获取对应信息
  // CONFIG_PATH_RISK_VERSION?: string; // 如何从原始返回的 config 中获取风控是新版还是旧版
  // // 风控错误码
  // CODE_NEED_VERIFY?: string; // 风控 - 需要用验证码进行二次验证
  // CODE_FORBIDDEN?: string; // 风控 - 中断业务流程
  // CODE_INVALID_INPUT?: string; // 验证码错误
  // // 风控验证类型 - 通过 DATA_PATH_VERIFY_TYPE 从初始 response 的 data 中得到的值
  // BY_SMS?: string; // 通过短信验证
  // BY_EMAIL?: string; // 通过邮箱验证
  // BY_MFA?: string; // 通过 MFA 设备验证
  // // URL 设置
  // URL_SEND_CODE?: string; // 必须设置，发送验证码接口地址（默认的好像就是这个地址）
  // URL_SETTINGS?: string; // 设置用户风控验证方式地址
  // URL_GET_MFA_INFO_TO_BIND?: string; // 获取绑定 MFA 所需信息的接口
  // URL_MFA_BIND?: string; // 绑定 MFA 设备的接口
  // URL_GET_MFA_INFO_TO_AUTH?: string; // 获取验证 MFA 所需信息的接口
  // URL_MFA_AUTH?: string; // 验证 MFA 设备的接口
  // // 发送验证码后的冷却时间
  // COOLING_AFTER_SENT?: number; // 发送验证码成功后的冷却时间（秒）
  // COOLING_AFTER_SEND_FAIL?: number; // 发送验证码失败后的冷却时间（秒）
  // U2F_TIMEOUT?: number; // U2F 设备的超时时间
  // // 其他
  // REQUEST_METHOD?: 'POST' | 'GET';
});
// ... add interceptors 3

export default fetcher
```
