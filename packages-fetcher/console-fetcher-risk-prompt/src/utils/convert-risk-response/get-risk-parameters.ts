import {
  IRiskConfig,
  TRiskResponse,
  IRiskValidator,
  IRiskParameters,
  TRiskParametersGetter
} from '../../types';

import getRiskValueViaConfig from './get-risk-value-via-config';

interface IGetRiskParametersProps<T> {
  riskConfig?: IRiskConfig;
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
    return {
      accountId: getRiskValueViaConfig({
        riskConfig,
        riskResponse,
        riskConfigKey: 'DATA_PATH_USER_ID',
        defaultValue: ''
      }),
      verifyUrl: getRiskValueViaConfig({
        riskConfig,
        riskResponse,
        riskConfigKey: 'DATA_PATH_VERIFY_URL',
        defaultValue: ''
      }),
      validators: getRiskValueViaConfig({
        riskConfig,
        riskResponse,
        riskConfigKey: 'DATA_PATH_VALIDATORS',
        defaultValue: [] as IRiskValidator[]
      }),
      codeType: getRiskValueViaConfig({
        riskConfig,
        riskResponse,
        riskConfigKey: 'DATA_PATH_NEW_VERIFY_CODE_TYPE',
        defaultValue: ''
      }),
      verifyType: getRiskValueViaConfig({
        riskConfig,
        riskResponse,
        riskConfigKey: 'DATA_PATH_NEW_VERIFY_TYPE',
        defaultValue: ''
      }),
      verifyDetail: getRiskValueViaConfig({
        riskConfig,
        riskResponse,
        riskConfigKey: 'DATA_PATH_NEW_VERIFY_DETAIL',
        defaultValue: ''
      })
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