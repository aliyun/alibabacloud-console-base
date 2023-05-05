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

    if (typeof newRisk === 'function') {
      const newRiskFnResult = newRisk(riskResponse);

      // newRisk 为函数时，只有在 newRisk 执行结果为 boolean 时才使用返回值，否则还是走到默认的判断逻辑
      if (typeof newRiskFnResult === 'boolean') {
        return newRiskFnResult;
      }
    }
  }

  // 从 riskResponse 解析是否是新版风控的默认逻辑
  if (verifyUrl || validators.length) {
    return true;
  }

  return false;
}