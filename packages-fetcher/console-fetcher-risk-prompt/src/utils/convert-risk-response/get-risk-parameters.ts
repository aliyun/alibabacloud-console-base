import _get from 'lodash/get';

import {
  IRiskConfig,
  TRiskResponse,
  IRiskValidator,
  IRiskParameters,
  TRiskParametersGetter
} from '../../types';

interface IGetRiskParametersProps<T> {
  riskConfig: Required<IRiskConfig>;
  riskResponse: TRiskResponse<T>;
  riskParametersGetter?: TRiskParametersGetter<T>;
}

// 从 riskResponse 中，根据 riskConfig 或者自定义 riskParametersGetter 函数拿到 riskPrompt 所需的参数
export default function getRiskParameters<T>({
  riskConfig,
  riskResponse,
  riskParametersGetter
}: IGetRiskParametersProps<T>): IRiskParameters {
  const newRiskParametersFromDataPath = ((): IRiskParameters => {
    const accountId = _get(riskResponse, riskConfig.dataPathUserId, '') as string;
    const verifyUrl = _get(riskResponse, riskConfig.dataPathVerifyUrl, '') as string;
    const codeType = _get(riskResponse, riskConfig.dataPathCodeType, '') as string;
    const verifyType = _get(riskResponse, riskConfig.dataPathVerifyType, '') as string;
    const verifyDetail = _get(riskResponse, riskConfig.dataPathVerifyDetail, '') as string;
    const validators = _get(riskResponse, riskConfig.dataPathValidators, []) as IRiskValidator[];

    return {
      accountId,
      verifyUrl,
      validators,
      codeType,
      verifyType,
      verifyDetail
    };
  })();

  try {
    if (riskParametersGetter) {
      return riskParametersGetter(riskResponse);
    }

    return newRiskParametersFromDataPath;
  } catch (error) {
    return newRiskParametersFromDataPath;
  }
}