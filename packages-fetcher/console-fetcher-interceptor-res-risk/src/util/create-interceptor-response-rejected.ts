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
  CODE_NEED_VERIFY
} from '@alicloud/console-fetcher-risk-prompt';

import {
  IFetcherInterceptorConfig
} from '../types';

import riskForbidden from './risk/forbidden';
import {
  convertToRiskErrorForbidden
} from './error';

/**
 * 根据业务错误 code 为基础的 fetcher 添加风控流程（老版本主账号风控）
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
    codeForbidden: CODE_FORBIDDEN,
    codeNeedVerify: CODE_NEED_VERIFY,
    codeInvalidInput: CODE_INVALID_INPUT,
    ...o
  };
  
  return async (error: FetcherError, fetcherConfig: FetcherConfig, response: FetcherResponse<Record<string, unknown>> | undefined, request: FetcherFnRequest): Promise<unknown> => {
    const {
      code
    } = error;
    const responseData = response?.data;
    
    switch (code) {
      case riskConfig.codeForbidden:
        await riskForbidden();
        
        throw convertToRiskErrorForbidden(error);
      case riskConfig.codeNeedVerify: {
        const {
          isMpk,
          mpkIsDowngrade
        } = convertMpkSetting({
          riskConfig,
          riskResponse: responseData
        });

        const newRisk = ((): boolean | undefined => {
          if (fetcherConfig.body && typeof fetcherConfig.body === 'object') {
            return fetcherConfig.body.riskVersion === '2.0';
          }
        })();

        const verifyResult = await riskPrompt({
          error,
          newRisk,
          riskConfig,
          riskResponse: responseData
        });

        const requestResponse = await request<unknown>(mergeConfig(fetcherConfig, canHaveBody(fetcherConfig) ? {
          body: {
            ...verifyResult,
            ...isMpk && mpkIsDowngrade ? {
              riskVersion: '1.0'
            } : {} // 轻量级虚商的降级联路需要指定 riskVersion: '1.0' 来覆盖 riskVersion: '2.0'
          }
        } : {
          params: {
            ...verifyResult,
            ...isMpk && mpkIsDowngrade ? {
              riskVersion: '1.0'
            } : {}
          }
        }));

        return requestResponse;
      }
      default:
        throw error;
    }
  };
}
