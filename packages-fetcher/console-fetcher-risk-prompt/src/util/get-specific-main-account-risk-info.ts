import {
  TMainAccountRiskInfo,
  INewMainAccountRiskInfo,
  IOldMainAccountOrMpkRiskInfo
} from '../types';

// 从 mainAccountRiskInfo 中解析出新版主账号风控的信息
export function getNewMainAccountRiskInfo(mainAccountRiskInfo?: TMainAccountRiskInfo): INewMainAccountRiskInfo {
  if (mainAccountRiskInfo?.type === 'new_main') {
    return mainAccountRiskInfo.riskInfo;
  }

  return {
    verifyUrl: '',
    verifyType: ''
  };
}

// 从 mainAccountRiskInfo 中解析出旧版主账号风控或者新版 MPK 账号风控的信息
export function getOldMainOrMpkAccountRiskInfo(mainAccountRiskInfo?: TMainAccountRiskInfo): IOldMainAccountOrMpkRiskInfo {
  if (mainAccountRiskInfo?.type === 'old_main_or_mpk') {
    return mainAccountRiskInfo.riskInfo;
  }

  return {
    isMpk: false,
    mpkIsDowngrade: true,
    verifyType: ''
  };
}