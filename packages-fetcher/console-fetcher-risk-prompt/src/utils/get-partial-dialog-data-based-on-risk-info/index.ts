import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  TRiskInfo
} from '../../types';
import {
  ERiskType,
  EDialogType,
  EVerifyType
} from '../../const';
import intl from '../../intl';

import {
  TAuthMfaDialogData
} from './_type';
import getAuthMfaDialogData from './get-auth-mfa-dialog-data';

export default async function getPartialDialogDataBasedOnRiskInfo(riskInfo: TRiskInfo): Promise<TAuthMfaDialogData> {
  try {
    const {
      riskType, verifyType, convertedVerifyType, verifyDetail
    } = riskInfo;
  
    if (riskType === ERiskType.NEW_SUB) {
      if (convertedVerifyType === EVerifyType.MFA) {
        // verifyDetail === 'false' 代表没有绑定过 MFA
        if (verifyDetail === 'false' || !verifyDetail) {
          return {
            dialogType: EDialogType.SUB_RISK_MFA_CHOOSE
          };
        }
  
        const authMfaDialogData = await getAuthMfaDialogData(riskInfo.accountId);
  
        return authMfaDialogData;
      }
      
      // 目前子账号风控只支持 MFA，不支持其他验证方式
      return {
        dialogType: EDialogType.ERROR,
        errorMessage: intl('message:invalid_unsupported_{method}!html', {
          method: verifyType
        })
      };
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