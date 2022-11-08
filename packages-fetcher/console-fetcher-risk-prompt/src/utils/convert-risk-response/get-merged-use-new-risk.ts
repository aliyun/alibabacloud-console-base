import {
  TNewRisk,
  IRiskResponse
} from '../../types';

interface IGetMergedUseNewRiskProps {
  newRisk?: TNewRisk;
  riskResponse?: IRiskResponse;
}

export default function getMergedUseNewRisk({
  newRisk,
  riskResponse
}: IGetMergedUseNewRiskProps): boolean {
  if (newRisk !== undefined) {
    if (typeof newRisk === 'boolean') {
      return newRisk;
    }

    return newRisk(riskResponse);
  }

  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    VerifyURL, Validators
  } = riskResponse ?? {};

  if (VerifyURL || Validators) {
    return true;
  }

  return false;
}