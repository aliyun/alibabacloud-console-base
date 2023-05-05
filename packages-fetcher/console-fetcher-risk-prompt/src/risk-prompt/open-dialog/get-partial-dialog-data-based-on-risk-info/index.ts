import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  ERiskType,
  ESceneKey,
  EDialogType,
  EConvertedVerifyType
} from '../../../enum';
import {
  IDialogData,
  TRiskInfo
} from '../../../types';
import intl from '../../../intl';

import getMfaBoundStatus from './get-mfa-bound-status';
import getVerificationValidators from './get-sub-validators';

export default async function getPartialDialogDataBasedOnRiskInfo(riskInfo: TRiskInfo): Promise<Omit<IDialogData, 'primaryButtonDisabledObject'>> {
  try {
    const {
      riskType
    } = riskInfo;
    
    if (riskType === ERiskType.NEW_SUB) {
      const {
        accountId,
        subRiskValidators
      } = riskInfo;
      const validatorsIncludesMfaToBind = subRiskValidators.find(o => o.convertedVerifyType === EConvertedVerifyType.MFA && !getMfaBoundStatus(o.verifyDetail));
      
      // 如果子账号的验证项只有 MFA，且 MFA 未绑定，直接报错。（子账号在风控流程中不支持绑定 MFA，触发子账号风控的前提条件是已经绑定 MFA 设备/手机/邮箱）
      if (subRiskValidators.length === 1 && validatorsIncludesMfaToBind) {
        return {
          dialogType: EDialogType.ERROR,
          errorMessageObject: {
            [ESceneKey.RISK_PROMPT_ERROR]: intl('message:invalid_unknown!lines')
          }
        };
      }
      
      const {
        subValidators,
        targetUserPrincipalName
      } = await getVerificationValidators({
        accountId,
        subRiskValidators
      });
      
      return {
        dialogType: EDialogType.SUB_RISK_VERIFICATION_AUTH,
        currentSubVerificationDeviceType: subValidators[0]!.deviceType,
        subGetVerificationToAuthData: {
          targetUserPrincipalName,
          subValidators
        },
        errorMessageObject: {}
      };
    }
    
    if (riskType === ERiskType.NEW_MAIN) {
      return {
        dialogType: EDialogType.NEW_MAIN_RISK,
        mainAccountRiskInfo: {
          type: 'new_main',
          riskInfo: {
            verifyType: riskInfo.verifyType,
            verifyUrl: riskInfo.verifyUrl
          }
        },
        errorMessageObject: {}
      };
    }
    
    if (riskType === ERiskType.OLD_MAIN) {
      return {
        dialogType: EDialogType.OLD_MAIN_OR_MPK_RISK,
        mainAccountRiskInfo: {
          type: 'old_main_or_mpk',
          riskInfo: {
            isMpk: false,
            verifyType: riskInfo.verifyType,
            mpkIsDowngrade: riskInfo.mpkIsDowngrade
          }
        },
        errorMessageObject: {}
      };
    }
    
    // 默认情况是旧版主账号风控
    return {
      dialogType: EDialogType.OLD_MAIN_OR_MPK_RISK,
      mainAccountRiskInfo: {
        type: 'old_main_or_mpk',
        riskInfo: {
          isMpk: riskInfo.isMpk,
          verifyType: riskInfo.verifyType,
          mpkIsDowngrade: riskInfo.mpkIsDowngrade
        }
      },
      errorMessageObject: {}
    };
  } catch (error) {
    return {
      dialogType: EDialogType.ERROR,
      errorMessageObject: {
        [ESceneKey.RISK_PROMPT_ERROR]: (error as FetcherError).message
      }
    };
  }
}
