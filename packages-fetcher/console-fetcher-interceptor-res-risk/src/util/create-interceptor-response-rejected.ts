import {
  canHaveBody,
  mergeConfig,
  FetcherConfig,
  FetcherResponse,
  FetcherError,
  FetcherFnRequest,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';
import riskPrompt, {
  convertMpkSetting,
  CODE_FORBIDDEN,
  CODE_INVALID_INPUT,
  CODE_NEED_VERIFY,
  type RiskPromptResolveData
} from '@alicloud/console-fetcher-risk-prompt';

import {
  IFetcherInterceptorConfig
} from '../types';

import riskForbidden from './risk/forbidden';
import {
  convertToRiskErrorForbidden
} from './error';

/**
 * TODO：重新描述新版风控流程
 * 
 * --------------------------------------------------------------------
 *            +-------------------+
 *            |  fetcher.request  |
 *            +---------+---------+
 *                      |
 *                  IF--˅---+
 *    +-------------Y  OK?  |
 *    |             +---N---+
 *    |                 |
 *    |               (err1)
 *    |                 |
 *    |         IF------˅------+      DIALOG-----------+     THROW=======================+ √ (test passed)
 *    |         |  forbidden?  Y ---> | risk/forbidden +---> || FetchErrorRiskForbidden ||
 *    |         +-------N------+      +----------------+     +===========================+ (can be ignored)
 *    |                 |
 *    |        IF-------˅--------+      THROW======+ √ (test passed)
 *    |        |  need verify?   N ---> ||  err1  ||
 *    |        +--------Y--------+      ===========+ (should be handled in the error model)
 *    |                 |
 *    |         DIALOG--˅--------+                  THROW=============================+ √ (test passed)
 *    |         |  risk/verify   +--- <CANCEL> ---> || FetchErrorRiskVerifyCancelled ||
 *    |         +-------+--------+                  +=================================+ (can be ignored)
 *    |                 |
 *    |   +-------------˅-----------+      +----------------+                    THROW=====================+ √ (test passed)
 *    |   |  verify setting right?  N ---> +  prompt about  +---> <dismiss> ---> || FetchErrorRiskInvalid ||
 *    |   +-------------Y-----------+      +----------------+                    +=========================+ (can be ignored)
 *    |                 |
 *    |        +--------˅--------+     +---------------------+ √ (test passed)
 *    |        |    input code   | <---+  warn code invalid  | <-------------+
 *    |        +--------+--------+     +---------------------+               |
 *    |                 |                                                    |
 *    |             <CONFIRM>                                                |
 *    |  verifyType + verifyCode + requestId                                 |
 *    |                 |                                                    |
 *    |         +-------˅-------+         IF------------Y-----------+        |
 *    |         |  fetch again  |   +---> |  code invalid / needed  Y -------+
 *    |         +-------+-------+   |     +-------------N-----------+
 *    |                 |         (err2)                |
 *    |             IF--˅---+       |        +----------˅-----------+
 *    |             +  OK?  N ------+        | risk/verify dismiss |
 *    |             +---Y---+                +----------+-----------+
 *    |                 |                               |
 *    |      +----------˅----------+            THROW===˅======+ √ (test passed)
 *    |      | risk/verify dismiss |            ||    err2    ||
 *    |      +----------+----------+            +==============+ (should be handled externally)
 *    |                 |
 *    |          +======˅======+ √ (test passed)
 *    +--------> || resolved! ||
 *               +=============+
 * --------------------------------------------------------------------
 */
export default function createInterceptorResponseRejected(o?: IFetcherInterceptorConfig): FetcherFnInterceptResponseRejected {
  const riskConfig: IFetcherInterceptorConfig = {
    CODE_FORBIDDEN,
    CODE_NEED_VERIFY,
    CODE_INVALID_INPUT,
    ...o
  };
  
  return async (error: FetcherError, fetcherConfig: FetcherConfig, response: FetcherResponse<Record<string, unknown>> | undefined, request: FetcherFnRequest): Promise<unknown> => {
    const {
      code
    } = error;
    const responseData = response?.data;
    
    switch (code) {
      case riskConfig.CODE_FORBIDDEN:
        await riskForbidden();
        
        throw convertToRiskErrorForbidden(error);
      case riskConfig.CODE_NEED_VERIFY: {
        const {
          isMpk,
          mpkIsDowngrade
        } = convertMpkSetting({
          riskConfig,
          riskResponse: responseData
        });

        // 带上风控参数重新请求被风控的接口
        const reRequestWithVerifyResult = async (verifyResult: RiskPromptResolveData): Promise<unknown> => {
          const reRequestResponse = await request<unknown>(mergeConfig(fetcherConfig, canHaveBody(fetcherConfig) ? {
            body: {
              ...verifyResult,
              ...isMpk && mpkIsDowngrade ? {
                // 轻量级虚商的降级联路需要指定 riskVersion: '1.0' 来覆盖 riskVersion: '2.0'
                riskVersion: '1.0'
              } : {}
            }
          } : {
            params: {
              ...verifyResult,
              ...isMpk && mpkIsDowngrade ? {
                riskVersion: '1.0'
              } : {}
            }
          }));
  
          return reRequestResponse;
        };

        // 对于 OneConsole 控制台风控而言，如果请求参数中带有 riskVersion：2.0，那么说明是新版风控
        const newRisk = ((): boolean | undefined => {
          if (fetcherConfig.body && typeof fetcherConfig.body === 'object') {
            return fetcherConfig.body.riskVersion === '2.0';
          }
        })();

        const verifyResult = await riskPrompt({
          error,
          newRisk,
          riskConfig,
          reRequestWithVerifyResult,
          riskResponse: responseData
        });

        return verifyResult.reRequestResponse;
      }
      default:
        throw error;
    }
  };
}