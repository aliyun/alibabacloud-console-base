import {
  IRiskPromptResolveData,
  IRiskPromptProps
} from '../types';
import {
  ERiskType,
  EVerifyType
} from '../enum';
import {
  DEFAULT_RISK_CONFIG
} from '../const';
import intl from '../intl';
import {
  safeJsonStringify,
  convertRiskResponse,
  convertToRiskErrorInvalid,
  convertToRiskErrorCancelled,
  getSubVerificationSettingUrl
} from '../utils';

import riskInvalid from './risk-invalid';
import openDialog from './open-dialog';

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

  const stringifiedRiskResponse = safeJsonStringify(riskResponse);

  if (riskInfo.riskType === ERiskType.NEW_SUB && !riskInfo.subRiskValidators.length) {
    await riskInvalid({
      subRisk: true,
      stringifiedRiskResponse,
      urlSetting: getSubVerificationSettingUrl(riskInfo.accountId),
      errorMessage: intl('message:invalid_unknown!lines')
    });

    throw convertToRiskErrorInvalid(error);
  }

  if (riskInfo.riskType !== ERiskType.NEW_SUB) {
    const {
      verifyType, verifyDetail, convertedVerifyType
    } = riskInfo;
    const mainAccountUrlSetting = riskConfig?.urlSetting || DEFAULT_RISK_CONFIG.urlSetting;
  
    switch (convertedVerifyType) {
      case EVerifyType.NONE:
        await riskInvalid({
          stringifiedRiskResponse,
          urlSetting: mainAccountUrlSetting,
          errorMessage: intl('message:invalid_unknown!lines')
        });

        throw convertToRiskErrorInvalid(error);
      case EVerifyType.UNKNOWN:
        await riskInvalid({
          stringifiedRiskResponse,
          urlSetting: mainAccountUrlSetting,
          errorMessage: intl('message:invalid_unsupported_{method}!html!lines', {
            method: verifyType
          })
        });

        throw convertToRiskErrorInvalid(error);
      case EVerifyType.SMS:
      case EVerifyType.EMAIL:
      // 旧版主账号风控的 sms & email 场景，必须有 verifyDetail
        if (riskInfo.riskType === ERiskType.OLD_MAIN && !verifyDetail) {
          await riskInvalid({
            stringifiedRiskResponse,
            urlSetting: mainAccountUrlSetting,
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
  }

  return openDialog(riskInfo, riskConfig).catch(err => {
    throw err ?? convertToRiskErrorCancelled(err);
  });
}