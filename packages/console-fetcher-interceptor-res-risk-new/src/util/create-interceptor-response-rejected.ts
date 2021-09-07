import {
  FetcherConfig,
  FetcherResponse,
  FetcherError,
  FetcherFnRequest,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig
} from '../types';
import {
  EVerifyType,
  EAccountType,
  DEFAULT_RISK_CONFIG
} from '../const';
import intl from '../intl';

import riskForbidden from './risk/forbidden';
import riskInvalid from './risk/invalid';
import riskSubVerifyMfa from './risk/sub-verify/mfa';
import riskMainVerify from './risk/main-verify';
import convertRiskInfo from './convert-risk-info';
import {
  convertToRiskErrorForbidden,
  convertToRiskErrorInvalid,
  convertToRiskErrorCancelled
} from './error';

/**
 * 根据业务错误 data.code 为基础的 fetcher 添加风控流程 https://yuque.antfin-inc.com/aliyun-it-governance-console/uas/risk-design-2021?inner=AnwDN
 * @param config 风控配置
 * 
 */
export default function createInterceptorResponseRejected(config?: IFetcherInterceptorConfig): FetcherFnInterceptResponseRejected {
  const riskConfig: IFetcherInterceptorConfig = {
    ...DEFAULT_RISK_CONFIG,
    ...config
  };

  return async (err: FetcherError, fecherConfig: FetcherConfig, response: FetcherResponse | undefined, request: FetcherFnRequest): Promise<unknown> => {
    const code = err?.code;
    const responseData = response?.data;

    switch (code) {
      case riskConfig.CODE_FORBIDDEN:
        await riskForbidden();

        throw convertToRiskErrorForbidden(err);
      case riskConfig.CODE_NEED_VERIFY: {
        const riskInfo = convertRiskInfo(responseData, riskConfig);

        if (riskInfo.accountType === EAccountType.MAIN) { // 主账号风控
          return riskMainVerify({
            request,
            mainRiskInfo: riskInfo,
            fecherConfig,
            riskConfig
          }).catch(err1 => {
            throw err1 ?? convertToRiskErrorCancelled(err);
          });
        }

        // 子账号风控
        const {
          verifyType,
          type
        } = riskInfo;

        switch (type) {
          case EVerifyType.NONE: // 未设置子账号风控方法
            await riskInvalid(intl('message:invalid_unknown!lines'), riskConfig.URL_SETTING!);

            throw convertToRiskErrorInvalid(err);
          case EVerifyType.UNKNOWN: // 不合法的子账号风控方式
            await riskInvalid(intl('message:invalid_unsupported_{method}!html!lines', {
              method: verifyType
            }), riskConfig.URL_SETTING!);

            throw convertToRiskErrorInvalid(err);
          case EVerifyType.MFA:
            return riskSubVerifyMfa({
              request,
              subRiskInfo: riskInfo,
              fecherConfig,
              riskConfig
            }).catch(err1 => {
              throw err1 ?? convertToRiskErrorCancelled(err);
            });
          // 子账号风控方式 sms、email，一期暂不支持
          default:
            break;
        }
      }

        throw err;
      
      default:
        throw err;
    }
  };
}