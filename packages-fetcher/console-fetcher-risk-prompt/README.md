# @alicloud/console-fetcher-risk-prompt

> `@alicloud/console-fetcher-risk-prompt` 是从 Fetcher 的风控响应拦截器 `@alicloud/console-fetcher-interceptor-res-risk`抽取出来的 Promise 化的风控弹窗 UI，支持老版主账号风控弹窗、新版主账号风控弹窗、新版子账号风控弹窗以及新版虚商风控弹窗。
它依赖于用户子账号风控的 Identify 数据请求包 `@alicloud/console-fetcher-risk-data`。

## INSTALL

```shell
tnpm i @alicloud/console-fetcher-risk-data @alicloud/console-fetcher-risk-prompt -S
```

## API

`@alicloud/console-fetcher-risk-prompt` 对外的默认导出 `riskPrompt`  是一个 Promise 化的异步函数，它接受 API 被风控的响应作为参数 `riskResponse` ，调用 `riskPrompt` 会弹出风控验证弹窗。

`riskPrompt` 的签名如下所示：

```typescript
type TRiskResponse<T = Record<string, unknown>> = T;
type TNewRisk<T = Record<string, unknown>> = boolean | ((riskResponse: TRiskResponse<T>) => boolean);
interface IRiskParameters {
  accountId: string; // 用户 ID
  codeType: string; // 风控码
  verifyType: string; // 风控验证方式
  verifyDetail?: string | boolean; // 风控验证详情
  validators?: IRiskValidator[]; // 子账号风控的风控验证方式及详情集合数组，目前只包括 MFA，后续会增加手机 & 邮箱
  verifyUrl?: string; // 新版主账号风控的核身弹窗 URL
}
type TRiskParametersGetter<T = Record<string, unknown>> = (riskResponse: TRiskResponse<T>) => IRiskParameters;

interface IRiskPromptProps<T> {
  riskResponse: TRiskResponse<T>; // API 被风控时的返回，必需  
  riskConfig?: IRiskConfig; // 风控配置，可选
  newRisk?: TNewRisk; // 是否使用新版风控，可选
  riskParametersGetter?: TRiskParametersGetter // 也可以自定一个 getter，从 riskResponse 中获取 riskPrompt 所需的参数
  error?: IPlainError; // 自定义 API 被风控的原始错误，用于保留业务错误信息，可选 
}

type TRiskPrompt<T = Record<string, unknown>> = (props: IRiskPromptProps<T>) => Promise<IRiskPromptResolveData> // 返回风控验证参数
```

### riskPrompt 的参数

- `riskResponse`: API 被风控时的返回，是一个对象，调用 `riskPrompt` 时可以通过泛型 `T` 来指定 riskResponse 的类型。对于 Xconsole 控制台而言，传入的 riskResponse 如下：

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

```typescript
interface IRiskConfig {
  dataPathVerifyUrl?: string; // 如何从原始返回中获取新版主账号风控的会员核身 URL 
  dataPathValidators?: string; // 如何从原始返回中获取新版子账号风控信息
  dataPathUserId?: string; // 如何从原始返回中中获取账号 ID
  dataPathExtend?: string; // 如何从原始返回中获取扩展信息，比如虚商相关的配置信息
  dataPathCodeType?: string; // 如何从原始返回中新版风控的风控码
  dataPathVerifyType?: string; // 如何从原始返回中新版主账号风控的风控类型
  dataPathVerifyDetail?: string; // 如何从原始返回中获取新版主账号风控详细信息（邮箱或手机）
  // 基于 Xconsole 控制台才可能传的参数
  dataPathOldCodeType?: string; // 如何从原始数据中获取旧版主账号风控码
  dataPathOldVerifyType?: string; // 如何从原始返回中获取旧版主账号的风控类型（邮箱、手机或者 MFA）
  dataPathOldVerifyDetail?: string; // 如何从原始返回中获取旧版主账号风控详细信息（邮箱或手机）
  // 其他配置
  bySms?: string; // 通过短信验证的 verifyType，默认为 sms
  byMfa?: string; // 通过邮箱验证的 verifyType，默认为 ga
  byEmail?: string; // 通过 MFA 设备验证的 verifyType，默认为 email
  urlSetting?: string; // 设置用户风控验证方式地址
  coolingAfterSent?: number; // 发送验证码成功后的冷却时间（秒）
  coolingAfterSentFail?: number; // 发送验证码失败后的冷却时间（秒）
}
```

这些字段都是可选的，`riskPrompt` 会有兜底处理，兜底的对象如下。兜底值是根据基于 OneConsole 的控制台被风控时的返回得到的。

```typescript
const DEFAULT_RISK_CONFIG = {
  bySms: 'sms',
  byEmail: 'email',
  byMfa: 'ga',
  urlSetting: '//account.console.aliyun.com/#/secure',
  coolingAfterSent: 60,
  coolingAfterSentFail: 10,
  dataPathVerifyType: 'data.verifyType',
  dataPathVerifyDetail: 'data.verifyDetail',
  dataPathCodeType: 'data.codeType',
  dataPathNewVerifyUrl: 'data.VerifyURL',
  dataPathNewValidators: 'data.Validators.Validator',
  dataPathNewAccountId: 'data.AliyunIdkp',
  dataPathNewExtend: 'data.Extend',
  dataPathNewCodeType: 'data.CodeType',
  dataPathNewVerifyType: 'data.VerifyType',
  dataPathNewVerifyDetail: 'data.VerifyDetail'
};
```

- `riskParametersGetter`：自定义 getter，从 `riskResponse` 中获取 `riskPrompt` 所需的参数。
`riskParametersGetter` 与 `riskConfig` 中的 `dataPath*` 的参数作用是一样的，都是自定义如何获取风控参数。

### riskPrompt 的返回

`riskPrompt` Resolve 后返回的结果是一个包含验证参数的对象 `riskPromptResolveData`。其中 `verifyCode` 表示风控验证后拿到的验证 Token，`verifyType` 表示本次风控的验证类型，目前包括 `sms（短信）`、`email（邮箱）`，`ga（MFA 设备）`，`requestId` 只在老版本风控时存在，表示发送验证码的 `requestId`。
风控流程报错或者用户取消风控时，错误会被抛出。其中用户取消风控的错误码为 `FetcherErrorRiskCancelled`。

```typescript
interface IRiskPromptResolveData {
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