import {
  TNewRisk,
  TRiskResponse,
  IRiskParameters
} from '../../types';

interface IGetMergedUseNewRiskProps<T> {
  newRisk?: TNewRisk<T>;
  riskResponse: TRiskResponse<T>;
  riskParameters: IRiskParameters;
}

export default function getMergedUseNewRisk<T>({
  newRisk,
  riskResponse,
  riskParameters
}: IGetMergedUseNewRiskProps<T>): boolean {
  const {
    verifyUrl = '',
    validators = []
  } = riskParameters;

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