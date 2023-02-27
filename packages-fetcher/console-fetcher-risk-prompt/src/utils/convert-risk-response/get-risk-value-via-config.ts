import _get from 'lodash/get';
import _isNil from 'lodash/isNil';
import _isEmpty from 'lodash/isEmpty';

import {
  IRiskConfig
} from '../../types';
import {
  DEFAULT_RISK_CONFIG
} from '../../const';

interface IProps<T, R> {
  riskConfig?: IRiskConfig;
  riskConfigKey: keyof IRiskConfig;
  riskResponse: R;
  defaultValue: T;
}

export default function getRiskValueViaConfig<T, R>({
  riskConfig,
  riskConfigKey,
  riskResponse,
  defaultValue
}: IProps<T, R>): T {
  const riskConfigPathValue = riskConfig?.[riskConfigKey];

  if (riskConfigPathValue) {
    return _get(riskResponse, riskConfigPathValue, defaultValue) as T;
  }

  // 兼容 riskResponse 的格式为 { data: { VerifyUrl: ''... } } 或者 { VerifyUrl: ''... }
  const defaultConfigPathValue = String(DEFAULT_RISK_CONFIG[riskConfigKey]);
  // DEFAULT_RISK_CONFIG 中跟路径相关的格式字段都为 data.x.x，兼容传入的 riskResponse 不带 data 字段的情况
  const defaultConfigPathValueWithoutPathData = defaultConfigPathValue.split('.').slice(1).join('.');

  const defaultPathValue = _get(riskResponse, defaultConfigPathValue, defaultValue) as T;
  const defaultPathValueWithoutPathData = _get(riskResponse, defaultConfigPathValueWithoutPathData, defaultValue) as T;

  // defaultPathValue 的值可能为数组
  return _isNil(defaultPathValue) || _isEmpty(defaultPathValue) ? defaultPathValueWithoutPathData : defaultPathValue;
}
