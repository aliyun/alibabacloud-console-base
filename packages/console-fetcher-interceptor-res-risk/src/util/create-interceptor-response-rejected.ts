import _get from 'lodash/get';

import {
  FetcherConfig,
  FetcherResponse,
  FetcherError,
  FetcherFnRequest,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import {
  EVerifyType
} from '../enum';
import {
  IFetcherInterceptorConfig
} from '../types';
import {
  DEFAULT_RISK_CONFIG
} from '../const';
import intl from '../intl';

import riskForbidden from './risk/forbidden';
import riskInvalid from './risk/invalid';
import riskVerify from './risk/verify';
import convertRiskInfo from './convert-risk-info';
import {
  convertToRiskErrorForbidden,
  convertToRiskErrorInvalid,
  convertToRiskErrorCancelled
} from './error';

/**
 * 根据业务错误 code 为基础的 fetcher 添加风控流程
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
    ...DEFAULT_RISK_CONFIG,
    ...o
  };
  
  return async (err: FetcherError, fetcherConfig: FetcherConfig, response: FetcherResponse | undefined, request: FetcherFnRequest): Promise<unknown> => {
    const {
      code
    } = err;
    const responseData = response?.data;
    
    switch (code) {
      case riskConfig.CODE_FORBIDDEN:
        await riskForbidden();
        
        throw convertToRiskErrorForbidden(err);
      case riskConfig.CODE_NEED_VERIFY: { // 加花括号防止 eslint no-case-declarations
        const riskInfo = convertRiskInfo(responseData, riskConfig);
        
        switch (riskInfo.type) {
          case EVerifyType.NONE:
            await riskInvalid(intl('message:invalid_unknown!lines'), riskConfig.URL_SETTINGS!);
            
            throw convertToRiskErrorInvalid(err);
          case EVerifyType.UNKNOWN:
            await riskInvalid(intl('message:invalid_unsupported_{method}!html!lines', {
              method: riskInfo.verifyType
            }), riskConfig.URL_SETTINGS!);
            
            throw convertToRiskErrorInvalid(err);
          case EVerifyType.SMS:
          case EVerifyType.EMAIL:
            // 手机/邮箱验证必须要有 detail，且一定要有 GET_VERIFY_CODE 设置
            if (!riskInfo.detail) {
              await riskInvalid(intl('message:invalid_unknown!lines'), riskConfig.URL_SETTINGS!);
              
              throw convertToRiskErrorInvalid(err);
            }
            
            break;
          default: // EVerifyType.MFA
            break;
        }
        
        if (_get(fetcherConfig, 'body.verifyCode') || _get(fetcherConfig, 'params.verifyCode')) {
          throw err;
        }
        
        return riskVerify({
          request,
          fetcherConfig,
          riskInfo,
          riskConfig
        }).catch(err1 => { // err1 undefined 表示 cancelled
          throw err1 ?? convertToRiskErrorCancelled(err);
        });
      }
      default:
        throw err;
    }
  };
}
