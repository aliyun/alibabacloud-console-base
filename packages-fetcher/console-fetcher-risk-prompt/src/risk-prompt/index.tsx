import {
  TNewRisk,
  IPlainError,
  TRiskResponse,
  IRiskConfig,
  IRiskPromptResolveData
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

interface IFetcherRiskPromptProps {
  error?: IPlainError;
  newRisk?: TNewRisk;
  riskConfig?: IRiskConfig;
  riskResponse?: TRiskResponse;
}

export default async function riskPrompt({
  error,
  newRisk,
  riskResponse,
  riskConfig
}: IFetcherRiskPromptProps): Promise<IRiskPromptResolveData> {
  const mergedRiskConfig = {
    ...DEFAULT_RISK_CONFIG,
    ...riskConfig
  };
  const riskInfo = convertRiskResponse({
    newRisk,
    riskResponse,
    riskConfig: mergedRiskConfig
  });
  const subRisk = riskInfo.riskType === ERiskType.NEW_SUB;

  switch (riskInfo.convertedVerifyType) {
    case EVerifyType.NONE:
      await riskInvalid({
        subRisk,
        urlSetting: mergedRiskConfig.urlSetting,
        errorMessage: subRisk ? intl('message:sub_invalid_unsupported_{method}!html!lines', {
          method: riskInfo.verifyType
        }) : intl('message:invalid_unsupported_{method}!html!lines', {
          method: riskInfo.verifyType
        })
      });

      throw convertToRiskErrorCancelled(error);
    case EVerifyType.UNKNOWN:
      await riskInvalid({
        subRisk,
        urlSetting: mergedRiskConfig.urlSetting,
        errorMessage: subRisk ? intl('message:sub_invalid_unsupported_{method}!html!lines', {
          method: riskInfo.verifyType
        }) : intl('message:invalid_unsupported_{method}!html!lines', {
          method: riskInfo.verifyType
        })
      });
      
      throw convertToRiskErrorInvalid(error);
    case EVerifyType.SMS:
    case EVerifyType.EMAIL:
      if (!subRisk && !riskInfo.verifyDetail) {
        await riskInvalid({
          subRisk,
          urlSetting: mergedRiskConfig.urlSetting,
          errorMessage: intl('message:invalid_unknown!lines')
        });
        
        throw convertToRiskErrorInvalid(error);
      }

      break;
    default: // MFA 以及新版主账号风控的场景
      break;
  }

  return openDialog(riskInfo, mergedRiskConfig).catch(err => {
    throw err ?? convertToRiskErrorCancelled(err);
  });
}