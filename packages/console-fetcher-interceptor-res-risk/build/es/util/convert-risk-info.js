import _get from 'lodash/get';
import convertVerifyType from './convert-veriy-type';
export default function convertRiskInfo(responseData, riskConfig) {
  var type0 = _get(responseData, riskConfig.DATA_PATH_VERIFY_TYPE, '');

  var detail = _get(responseData, riskConfig.DATA_PATH_VERIFY_DETAIL, '');

  var codeType = _get(responseData, riskConfig.DATA_PATH_VERIFY_CODE_TYPE, '');

  return {
    verifyType: type0,
    type: convertVerifyType(type0, riskConfig),
    detail: detail,
    codeType: codeType
  };
}