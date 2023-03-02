import {
  IRiskPromptResolveData,
  IRiskPromptProps
} from '../types';
import {
  ERiskType,
  EConvertedVerifyType
} from '../enum';
import {
  BUILT_IN_RISK_CONFIG
} from '../const';
import intl from '../intl';
import {
  getAccountIdFromRiskInfo,
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

  const accountId = getAccountIdFromRiskInfo(riskInfo);
  const stringifiedRiskResponse = safeJsonStringify(riskResponse);

  if (riskInfo.riskType === ERiskType.NEW_SUB && !riskInfo.subRiskValidators.length) {
    await riskInvalid({
      accountId,
      stringifiedRiskResponse,
      subRisk: true,
      urlSetting: getSubVerificationSettingUrl(accountId),
      errorMessage: intl('message:invalid_unknown!lines')
    });

    throw convertToRiskErrorInvalid(error);
  }

  if (riskInfo.riskType !== ERiskType.NEW_SUB) {
    const {
      urlSetting
    } = BUILT_IN_RISK_CONFIG;
    const {
      verifyType, verifyDetail, convertedVerifyType
    } = riskInfo;
  
    switch (convertedVerifyType) {
      case EConvertedVerifyType.NONE:
        await riskInvalid({
          accountId,
          urlSetting,
          stringifiedRiskResponse,
          errorMessage: intl('message:invalid_unknown!lines')
        });

        throw convertToRiskErrorInvalid(error);
      case EConvertedVerifyType.UNKNOWN:
        await riskInvalid({
          accountId,
          urlSetting,
          stringifiedRiskResponse,
          errorMessage: intl('message:invalid_unsupported_{method}!html!lines', {
            method: verifyType
          })
        });

        throw convertToRiskErrorInvalid(error);
      case EConvertedVerifyType.SMS:
      case EConvertedVerifyType.EMAIL:
      // 旧版主账号风控的 sms & email 场景，必须有 verifyDetail
        if (riskInfo.riskType === ERiskType.OLD_MAIN && !verifyDetail) {
          await riskInvalid({
            accountId,
            urlSetting,
            stringifiedRiskResponse,
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

  return openDialog(riskInfo).catch(err => {
    throw err ?? convertToRiskErrorCancelled(err);
  });
}