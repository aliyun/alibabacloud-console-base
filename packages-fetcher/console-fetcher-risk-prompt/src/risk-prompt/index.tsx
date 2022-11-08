import {
  TNewRisk,
  IPlainError,
  IRiskResponse,
  IRiskPromptResolveData
} from '../types';
import {
  ERiskType,
  EVerifyType
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
  riskResponse: IRiskResponse;
}

export default async function riskPrompt({
  error,
  newRisk,
  riskResponse
}: IFetcherRiskPromptProps): Promise<IRiskPromptResolveData> {
  const riskInfo = convertRiskResponse({
    newRisk,
    riskResponse
  });
  const subRisk = riskInfo.riskType === ERiskType.NEW_SUB;

  switch (riskInfo.convertedVerifyType) {
    case EVerifyType.NONE:
      await riskInvalid({
        subRisk,
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
          errorMessage: intl('message:invalid_unknown!lines')
        });
        
        throw convertToRiskErrorInvalid(error);
      }

      break;
    default: // MFA 以及新版主账号风控的场景
      break;
  }

  return openDialog(riskInfo).catch(err => {
    throw err ?? convertToRiskErrorCancelled(err);
  });
}