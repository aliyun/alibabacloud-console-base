import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  IDialogData,
  TRiskInfo,
  TGetVerificationInfoToAuthData
} from '../../../types';
import {
  ERiskType,
  EDialogType,
  ESubBindMfaStep,
  EConvertedVerifyType
} from '../../../enum';
import {
  DEFAULT_API_ERROR_MESSAGE_OBJECT
} from '../../../const';

import getMfaBoundStatus from './get-mfa-bound-status';
import getVerificationValidators from './get-verification-validators';

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

      // 如果子账号的验证项只有 MFA，且 MFA 未绑定，那么风控弹窗只有用户绑定的 UI
      if (subRiskValidators.length === 1 && validatorsIncludesMfaToBind) {
        return {
          dialogType: EDialogType.SUB_RISK_MFA_BIND,
          // 第一步是选择要绑定的 MFA 设备
          subBindMfaStep: ESubBindMfaStep.CHOOSE_BIND_MFA_TYPE,
          errorMessageObject: DEFAULT_API_ERROR_MESSAGE_OBJECT
        };
      }

      const {
        verificationValidators,
        targetUserPrincipalName
      } = await getVerificationValidators({
        accountId,
        subRiskValidators
      });
      const verificationOrBindValidators = ((): TGetVerificationInfoToAuthData[] => {
        const validators: TGetVerificationInfoToAuthData[] = [...verificationValidators];

        // 将绑定 MFA 也融入场景中
        if (validatorsIncludesMfaToBind) {
          validators.push({
            deviceType: 'bindMfa'
          });
        }

        return validators;
      })();
      
      return {
        dialogType: EDialogType.SUB_RISK_VERIFICATION_AUTH,
        subBindMfaStep: ESubBindMfaStep.CHOOSE_BIND_MFA_TYPE,
        currentSubVerificationDeviceType: verificationValidators[0].deviceType,
        subGetVerificationToAuthData: {
          targetUserPrincipalName,
          verificationOrBindValidators
        },
        errorMessageObject: DEFAULT_API_ERROR_MESSAGE_OBJECT
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
        errorMessageObject: DEFAULT_API_ERROR_MESSAGE_OBJECT
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
        errorMessageObject: DEFAULT_API_ERROR_MESSAGE_OBJECT
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
      errorMessageObject: DEFAULT_API_ERROR_MESSAGE_OBJECT
    };
  } catch (error) {
    return {
      dialogType: EDialogType.ERROR,
      errorMessageObject: {
        ...DEFAULT_API_ERROR_MESSAGE_OBJECT,
        riskPromptError: (error as FetcherError).message
      }
    };
  }
}