import _get from 'lodash/get';

import {
  TNewRisk,
  IRiskConfig,
  TRiskResponse,
  IRiskValidator
} from '../../types';

interface IGetMergedUseNewRiskProps {
  newRisk?: TNewRisk;
  riskResponse?: TRiskResponse;
  riskConfig: Pick<Required<IRiskConfig>, 'dataPathVerifyUrl' | 'dataPathValidators'>;
}

export default function getMergedUseNewRisk({
  newRisk,
  riskConfig,
  riskResponse
}: IGetMergedUseNewRiskProps): boolean {
  const verifyUrl = _get(riskResponse, riskConfig.dataPathVerifyUrl, '') as string;
  const validators = _get(riskResponse, riskConfig.dataPathValidators, []) as IRiskValidator[];

  if (newRisk !== undefined) {
    if (typeof newRisk === 'boolean') {
      return newRisk;
    }

    return newRisk(riskResponse);
  }

  if (verifyUrl || validators.length) {
    return true;
  }

  return false;
}