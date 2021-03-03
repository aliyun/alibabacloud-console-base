import _get from 'lodash/get';

import {
  IFetcherInterceptorConfig,
  IRiskInfo
} from '../types';

import convertVerifyType from './convert-veriy-type';

export default function convertRiskInfo(responseData: unknown, riskConfig: IFetcherInterceptorConfig): IRiskInfo {
  const type0: string = _get(responseData, riskConfig.DATA_PATH_VERIFY_TYPE!, '') as string;
  const detail: string = _get(responseData, riskConfig.DATA_PATH_VERIFY_DETAIL!, '') as string;
  const codeType: string = _get(responseData, riskConfig.DATA_PATH_VERIFY_CODE_TYPE!, '') as string;
  
  return {
    verifyType: type0,
    type: convertVerifyType(type0, riskConfig),
    detail,
    codeType
  };
}
