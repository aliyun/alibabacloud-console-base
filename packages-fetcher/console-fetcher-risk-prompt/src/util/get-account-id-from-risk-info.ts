import {
  ERiskType
} from '../enum';
import {
  TRiskInfo
} from '../types';

export default function getAccountIdFromRiskInfo(riskInfo: TRiskInfo): string {
  if (riskInfo.riskType !== ERiskType.OLD_MAIN) {
    return riskInfo.accountId;
  }

  return '';
}
