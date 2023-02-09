import {
  IRiskPromptResolveData,
  IRiskPromptProps
} from '../types';
import {
  ERiskType,
  EVerifyType,
  DEFAULT_RISK_CONFIG
} from '../const';
import intl from '../intl';
import {
  convertRiskResponse,
  convertToRiskErrorInvalid,
  convertToRiskErrorCancelled
} from '../utils';

import openDialog from './open-dialog';
import riskInvalid from './risk-invalid';

export default async function riskPrompt<T = Record<string, unknown>>({
  error,
  newRisk,
  riskConfig,
  riskResponse,
  riskParametersGetter
}: IRiskPromptProps<T>): Promise<IRiskPromptResolveData> {
  const riskInfo = convertRiskResponse({
    newRisk,
    riskConfig,
    riskResponse,
    riskParametersGetter
  });
  const {
    riskType, verifyType, verifyDetail, convertedVerifyType
  } = riskInfo;
  const subRisk = riskType === ERiskType.NEW_SUB;
  const urlSetting = riskConfig?.urlSetting || DEFAULT_RISK_CONFIG.urlSetting;

  switch (convertedVerifyType) {
    case EVerifyType.NONE:
      await riskInvalid({
        subRisk,
        verifyType,
        verifyDetail,
        urlSetting,
        errorMessage: intl('message:invalid_unknown!lines')
      });

      throw convertToRiskErrorInvalid(error);
    case EVerifyType.UNKNOWN:
      await riskInvalid({
        subRisk,
        verifyType,
        verifyDetail,
        urlSetting,
        errorMessage: subRisk ? intl('message:sub_invalid_unsupported_{method}!html!lines', {
          method: verifyType
        }) : intl('message:invalid_unsupported_{method}!html!lines', {
          method: verifyType
        })
      });

      throw convertToRiskErrorInvalid(error);
    case EVerifyType.SMS:
    case EVerifyType.EMAIL:
      // 子账号风控赞不支持 sms & email
      // 旧版主账号风控的 sms & email 场景，必须有 verifyType
      if (subRisk || (riskType === ERiskType.OLD_MAIN && !verifyDetail)) {
        await riskInvalid({
          subRisk,
          verifyType,
          verifyDetail,
          urlSetting,
          errorMessage: intl('message:invalid_unsupported_{method}!html!lines', {
            method: verifyType
          })
        });
        
        throw convertToRiskErrorInvalid(error);
      }

      break;
    default: // MFA 以及新版主账号风控的场景
      break;
  }

  return openDialog(riskInfo, {
    urlSetting,
    coolingAfterSent: riskConfig?.coolingAfterSent || DEFAULT_RISK_CONFIG.coolingAfterSent,
    coolingAfterSentFail: riskConfig?.coolingAfterSentFail || DEFAULT_RISK_CONFIG.coolingAfterSentFail
  }).catch(err => {
    throw err ?? convertToRiskErrorCancelled(err);
  });
}