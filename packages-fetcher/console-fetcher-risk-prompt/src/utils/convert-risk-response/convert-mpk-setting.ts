import {
  IMpkExtendSetting
} from '../../types';

interface IResultConvertMpkSetting {
  isMpk: boolean;
  mpkIsDowngrade: boolean;
  mpkUseIdentityService: boolean;
}

// 从初识的 Response 拿到的 Mpk 相关的设置，是字符串类型的 'true' / 'false'...
export default function convertMpkSetting(mpkSetting?: IMpkExtendSetting): IResultConvertMpkSetting {
  if (!mpkSetting) {
    return {
      isMpk: false,
      mpkIsDowngrade: true,
      mpkUseIdentityService: false
    };
  }

  const {
    isMpk: isMpk0,
    useOldVersion
  } = mpkSetting;

  const isMpk = ((): boolean => {
    if (!isMpk0) {
      return false; // 兜底值是非 MPK
    }

    return isMpk0 === 'true';
  })();
  const mpkIsDowngrade = ((): boolean => {
    if (!useOldVersion) {
      return true; // 兜底值是走降级链路
    }
  
    return useOldVersion === 'true';
  })();

  return {
    isMpk,
    mpkIsDowngrade,
    mpkUseIdentityService: isMpk && !mpkIsDowngrade
  };
}