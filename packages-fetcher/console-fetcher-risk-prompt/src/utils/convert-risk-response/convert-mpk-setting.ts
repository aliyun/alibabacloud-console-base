import _get from 'lodash/get';

import {
  IRiskConfig,
  TRiskResponse,
  IMpkExtendSetting
} from '../../types';
import {
  DEFAULT_RISK_CONFIG
} from '../../const';

interface IConvertMpkSettingProps<T> {
  riskResponse?: TRiskResponse<T>;
  riskConfig: Pick<IRiskConfig, 'dataPathExtend'>;
}

interface IConvertMpkSettingResult {
  isMpk: boolean;
  mpkIsDowngrade: boolean;
  mpkUseIdentityService: boolean;
}

// 从初识的 Response 拿到的 Mpk 相关的设置，是字符串类型的 'true' / 'false'...
export default function convertMpkSetting<T>({
  riskConfig,
  riskResponse
}: IConvertMpkSettingProps<T>): IConvertMpkSettingResult {
  const dataPathMpkExtend = riskConfig.dataPathExtend ?? DEFAULT_RISK_CONFIG.dataPathExtend;

  const mpkSetting = _get(riskResponse, dataPathMpkExtend, {}) as IMpkExtendSetting;

  const {
    isMpk: isMpk0,
    useOldVersion
  } = mpkSetting;

  const isMpk = ((): boolean => {
    if (isMpk0 === undefined) {
      return false; // 兜底值是非 MPK
    }

    if (typeof isMpk0 === 'boolean') {
      return isMpk0;
    }

    return isMpk0 === 'true';
  })();
  const mpkIsDowngrade = ((): boolean => {
    if (useOldVersion === undefined) {
      return true; // 兜底值是走降级链路
    }

    if (typeof useOldVersion === 'boolean') {
      return useOldVersion;
    }
  
    return useOldVersion === 'true';
  })();

  return {
    isMpk,
    mpkIsDowngrade,
    mpkUseIdentityService: isMpk && !mpkIsDowngrade
  };
}