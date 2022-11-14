import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  TRiskInfo
} from '../../types';
import {
  ERiskType,
  EDialogType
} from '../../const';

import {
  TAuthMfaDialogData
} from './_type';
import getAuthMfaDialogData from './get-auth-mfa-dialog-data';

export default async function getPartialDialogDataBasedOnRiskInfo(riskInfo: TRiskInfo): Promise<TAuthMfaDialogData> {
  try {
    const {
      riskType, verifyDetail
    } = riskInfo;
  
    if (riskType === ERiskType.NEW_SUB) {
      // 子账号风控场景的 sms / email 在调用 riskPrompt 时就被拦截了，这里一定是 MFA
      // verifyDetail 类型为 string 时，'false' 表示没有绑定过 MFA，verifyDetail 类型为 boolean 时，false 表示没有绑定过 MFA
      if (verifyDetail === 'false' || !verifyDetail) {
        return {
          dialogType: EDialogType.SUB_RISK_MFA_CHOOSE
        };
      }

      const authMfaDialogData = await getAuthMfaDialogData(riskInfo.accountId);

      return authMfaDialogData;
    }
  
    if (riskType === ERiskType.NEW_MAIN) {
      return {
        dialogType: EDialogType.NEW_MAIN_RISK,
        newMainAccountRiskInfo: {
          verifyUrl: riskInfo.verifyUrl
        }
      };
    }
  
    if (riskType === ERiskType.OLD_MAIN) {
      return {
        dialogType: EDialogType.OLD_MAIN_OR_MPK_RISK,
        oldMainOrMpkRiskInfo: {
          isMpk: false,
          mpkIsDowngrade: riskInfo.mpkIsDowngrade
        }
      };
    }
  
    return {
      dialogType: EDialogType.OLD_MAIN_OR_MPK_RISK,
      oldMainOrMpkRiskInfo: {
        isMpk: riskInfo.isMpk,
        mpkIsDowngrade: riskInfo.mpkIsDowngrade
      }
    };
  } catch (error) {
    return {
      dialogType: EDialogType.ERROR,
      errorMessage: (error as FetcherError).message
    };
  }
}