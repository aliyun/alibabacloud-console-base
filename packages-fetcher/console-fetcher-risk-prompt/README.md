# @alicloud/console-fetcher-risk-prompt

> `@alicloud/console-fetcher-risk-prompt` 是从 Fetcher 的风控响应拦截器 `@alicloud/console-fetcher-interceptor-res-risk`抽取出来的 Promise 化的风控弹窗 UI，支持老版主账号风控弹窗、新版主账号风控弹窗、新版子账号风控弹窗以及新版虚商风控弹窗。
它依赖于用户子账号风控的 Identify 数据请求包 `@alicloud/console-fetcher-risk-data`。

## INSTALL

```shell
tnpm i @alicloud/console-fetcher-risk-data @alicloud/console-fetcher-risk-prompt -S
```

## API

`@alicloud/console-fetcher-risk-prompt` 对外的默认导出 `riskPrompt`  是一个 Promise 化的异步函数，它接受 API 被风控的响应作为参数 `riskResponse` ，调用 `riskPrompt` 会弹出风控验证弹窗。

`riskPrompt` 的完整签名如下所示：

```typescript
// riskPrompt Resolve 出来的风控验证参数
interface IRiskPromptVerifyResult {
  verifyCode: string;
  verifyType: string;
  requestId?: string;
}
// 如果调用 riskPrompt 时传入 reRequestWithVerifyResult（指定如何请求被风控的接口），那么在风控验证完成后会自动调用 reRequestWithVerifyResult，调用成功后 riskPrompt 的值会增加 reRequestResponse 表示接口响应。如果调用失败，会抛出错误
interface IRiskPromptResolveData extends IRiskPromptVerifyResult {
  // 如果参数中有 reRequestWithVerifyResult，那么获取到 verifyResult 后会重新请求被风控的接口获取 reRequestResponse，并在作为 close 函数参数
  reRequestResponse?: unknown;
}
type TRiskResponse<T = Record<string, unknown>> = T;
type TNewRisk<T = Record<string, unknown>> = boolean | ((riskResponse: TRiskResponse<T>) => boolean);
interface IRiskParameters {
  accountId: string; // 用户 ID
  codeType: string; // 风控码
  verifyType: string; // 风控验证方式
  verifyDetail?: string | boolean; // 风控验证详情
  validators?: IRiskValidator[]; // 子账号风控的风控验证方式及详情集合数组
}
type TRiskParametersGetter<T = Record<string, unknown>> = (riskResponse: TRiskResponse<T>) => IRiskParameters;

interface IExtraRiskConfig {
  BY_SMS?: string; // 通过短信验证的方法，默认 sms
  BY_EMAIL?: string; // 通过邮箱验证的方法，默认 email
  BY_MFA?: string; // 通过 MFA 设备验证，默认 ga
  URL_SEND_CODE?: string; // 旧版主账号风控验证码发送接口地址，默认 /risk/sendVerifyMessage.json
  URL_SETTINGS?: string; // 旧版主账号风控验证方式设置地址
  REQUEST_METHOD?: TRequestMethod; // 默认 POST，影响旧版主账号发送验证码接口
}

interface IRiskDataPathConfig {
  DATA_PATH_VERIFY_URL?: string; // 如何从风控响应中获取新版主账号风控的会员核身 URL 
  DATA_PATH_VALIDATORS?: string; // 如何从风控响应中获取新版子账号风控信息
  DATA_PATH_USER_ID?: string; // 如何从风控响应中中获取账号 ID
  DATA_PATH_NEW_EXTEND?: string; // 如何从风控响应中获取扩展信息，比如虚商相关的配置信息
  DATA_PATH_NEW_VERIFY_CODE_TYPE?: string; // 如何从风控响应中新版风控的风控码
  DATA_PATH_NEW_VERIFY_TYPE?: string; // 如何从风控响应中新版主账号风控的风控类型
  DATA_PATH_NEW_VERIFY_DETAIL?: string; // 如何从风控响应中获取新版主账号风控详细信息（邮箱或手机）
  // OneConsole 控制台才可能传的参数
  DATA_PATH_VERIFY_CODE_TYPE?: string; // 如何从原始数据中获取旧版主账号风控码
  DATA_PATH_VERIFY_TYPE?: string; // 如何从风控响应中获取旧版主账号的风控类型（邮箱、手机或者 MFA）
  DATA_PATH_VERIFY_DETAIL?: string; // 如何从风控响应中获取旧版主账号风控详细信息（邮箱或手机）
}

interface IRiskConfig extends IRiskDataPathConfig, IExtraRiskConfig {}

interface IRiskPromptProps<T> {
  riskResponse: TRiskResponse<T>; // API 被风控时的返回，必需  
  riskConfig?: IRiskConfig; // 风控配置，可选
  newRisk?: TNewRisk; // 是否使用新版风控，可选
  riskParametersGetter?: TRiskParametersGetter // 也可以自定义 getter，从 riskResponse 中获取 riskPrompt 所需的参数
  error?: IPlainError; // 自定义 API 被风控的原始错误，用于保留业务错误信息，可选 
}
// riskPrompt 的定义
type TRiskPrompt<T = Record<string, unknown>> = (props: IRiskPromptProps<T>) => Promise<IRiskPromptResolveData> // 返回风控验证参数
```

### riskPrompt 的参数

- `riskResponse`: **必需参数** API 被风控时的返回，是一个对象，调用 `riskPrompt` 时可以通过泛型 `T` 来指定 riskResponse 的类型。 OneConsole 类型控制台的风控响应如下：

```typescript
interface IOriginalRiskValidator {
  VerifyDetail: string;
  VerifyType: string;
}

interface IMpkExtendSetting {
  isMpk: string; // 是否是虚商
  useOldVersion: string; // 对于虚商类型的账号，是否使用 /risk/sendVerifyMessage.json 来发送验证码（降级情况）
}
// OneConsole 返回的新版风控的请求响应
interface IRiskResponse {
  code: string;
  successResponse: boolean;
  data: {
    // 新版风控会有以下字段
    VerifyURL?: string; // 新版主账号的核身框 URL
    CodeType?: string;
    AliyunIdkp?: string;
    VerifyType?: string;
    VerifyDetail?: string;
    Validators?: {
      Validator?: IOriginalRiskValidator[];
    };
    Extend?: IMpkExtendSetting;
    // 旧版本的主账号风控会有以下的字段（首字母小写）
    codeType?: string;
    verifyType?: string;
    verifyDetail?: string;
  }
}
```

- `error`：API 被风控时的错误，可选。风控属于特殊情况的接口报错。在 Fetcher 中，这个 error 是上一个拦截器往后抛出的错误。

- `newRisk`：可以自定义是否使用新版风控。在 `riskPrompt` 中，默认会从 `riskResponse` 中根据新旧风控接口返回的不同格式，解析出当前弹窗时新版风控还是旧版风控。可以传入 `newRisk` 来自定义是否使用新版风控，其优先级更高。
例如，使用新版风控时 Fetcher 会在 API 请求参数中增加 riskVersion: 2.0，Fetcher 由此可以判断 riskResponse 是否是新版风控格式的 API 返回。
如果 `newRisk` 传入的是一个函数，那么其参数为 riskResponse，且可以传入泛型 `T` 来指定 riskResponse 的类型。

- `riskConfig`：风控配置。其类型定义如下。

这些字段都是**可选**的，`riskPrompt` 会有兜底处理，兜底的对象如下。兜底值是根据基于 OneConsole 的控制台被风控时的返回得到的。

```typescript
const DEFAULT_EXTRA_RISK_CONFIG = {
  BY_SMS: 'sms',
  BY_EMAIL: 'email',
  BY_MFA: 'ga',
  REQUEST_METHOD: 'POST' as const,
  // 旧版主账号的验证码发送地址，默认是 /risk/sendVerifyMessage.json，业务方可以传入覆盖
  URL_SEND_CODE: '/risk/sendVerifyMessage.json',
  // 阿里云 APP 设置主账号手机/邮箱的地址与 PC 端不一样
  URL_SETTINGS: ALIYUN_APP_VERSION ? '//m.console.aliyun.com/app-basic-business/account-setting?navigationBar=false' : '//account.console.aliyun.com/#/secure'
};

const DEFAULT_RISK_CONFIG = {
  // 从 riskResponse 中如何解析风控信息
  DATA_PATH_VERIFY_TYPE: 'data.verifyType',
  DATA_PATH_VERIFY_DETAIL: 'data.verifyDetail',
  DATA_PATH_VERIFY_CODE_TYPE: 'data.codeType',
  DATA_PATH_VERIFY_URL: 'data.VerifyURL',
  DATA_PATH_VALIDATORS: 'data.Validators.Validator',
  DATA_PATH_USER_ID: 'data.AliyunIdkp',
  DATA_PATH_NEW_EXTEND: 'data.Extend',
  DATA_PATH_NEW_VERIFY_CODE_TYPE: 'data.CodeType',
  DATA_PATH_NEW_VERIFY_TYPE: 'data.VerifyType',
  DATA_PATH_NEW_VERIFY_DETAIL: 'data.VerifyDetail'
};
```

- `riskParametersGetter`：自定义 getter，从 `riskResponse` 中获取 `riskPrompt` 所需的参数。
`riskParametersGetter` 与 `riskConfig` 中的 `dataPath*` 的参数作用是一样的，都是自定义如何获取风控参数。

### riskPrompt 的返回

`riskPrompt` Resolve 后返回的结果是一个包含验证参数的对象 `riskPromptResolveData`。其中 `verifyCode` 表示风控验证后拿到的验证 Token，`verifyType` 表示本次风控的验证类型，目前包括 `sms（短信）`、`email（邮箱）`，`ga（MFA 设备）`，`requestId` 只在老版本风控时存在，表示发送验证码的 `requestId`。
风控流程报错或者用户取消风控时，错误会被抛出。其中用户取消风控的错误码为 `FetcherErrorRiskCancelled`。

```typescript
interface IRiskPromptVerifyResult {
  verifyCode: string;
  verifyType: string;
  requestId?: string;
}
```

调用方在调用完 `riskPrompt`并拿到 resolve 后的`riskPromptResolveData`后，需要**重新请求被风控的接口**，并把`riskPromptResolveData`的参数**合并到请求参数中**。如果风控响应参数验证通过，那么接口会正常返回业务数据。

### 使用示例

```typescript
import riskPrompt, {
  CODE_NEED_VERIFY
} from '@alicloud/console-fetcher-risk-prompt';

import dataGetUserInfo from './services/getUserInfo'; // dataGetUser 是一个控制台 API

const getUserInfoPayload = {
  userName: 'testUserName';
}

const getUserInfoWithRisk = payload => {
  return dataGetUserInfo(payload)
    .then(response => {
      // 如果通过 response.data.code 判断 API 被风控需要核身
      if (response.code === CODE_NEED_VERIFY) {
        return riskPrompt({
          riskResponse: response
        })
          .then(riskResult => {
            // 核身成功后，需要把风控验证参数对象合并到请求参数中，重新发起 API 请求
            return dataGetUserInfo({
              ...riskResult,
              ...payload
            });
          })
          .catch(error => {
            console.error(error);
            throw error;
          });
      }
    })
}


getUserInfoWithRisk(getUserInfoPayload)
```