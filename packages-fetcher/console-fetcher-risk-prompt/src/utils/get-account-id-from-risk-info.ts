import {
  TRiskInfo
} from '../types';
import {
  ERiskType
} from '../enum';

export default function getAccountIdFromRiskInfo(riskInfo: TRiskInfo): string {
  if (riskInfo.riskType !== ERiskType.OLD_MAIN) {
    return riskInfo.accountId;
  }

  return '';
}