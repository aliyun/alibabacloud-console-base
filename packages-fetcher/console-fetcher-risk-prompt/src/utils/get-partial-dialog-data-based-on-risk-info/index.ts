import type {
  FetcherError
} from '@alicloud/fetcher';
import {
  dataGetVerificationInfoToAuth
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  TRiskInfo,
  TGetVerificationInfoToAuthData
} from '../../types';
import {
  ERiskType,
  EDialogType,
  EVerifyType,
  ESubIdentityServiceType,
  ESubBindMfaStep
} from '../../enum';

const isMfaBounded = (verifyDetail: string | boolean): boolean => {
  if (typeof verifyDetail === 'boolean') {
    return verifyDetail;
  }

  if (typeof verifyDetail === 'string') {
    return verifyDetail === 'true';
  }

  // 默认是已绑定
  return true;
};

export default async function getPartialDialogDataBasedOnRiskInfo(riskInfo: TRiskInfo): Promise<Omit<IDialogData, 'primaryButtonDisabled'>> {
  try {
    const {
      riskType
    } = riskInfo;

    if (riskType === ERiskType.NEW_SUB) {
      const {
        accountId,
        subRiskValidators
      } = riskInfo;
      const validatorsIncludesMfaToBind = subRiskValidators.find(o => o.convertedVerifyType === EVerifyType.MFA && !isMfaBounded(o.verifyDetail));

      if (subRiskValidators.length === 1 && validatorsIncludesMfaToBind) {
        return {
          dialogType: EDialogType.SUB_RISK_MFA_BIND,
          subBindMfaStep: ESubBindMfaStep.CHOOSE_BIND_MFA_TYPE
        };
      }

      const verificationValidators = await dataGetVerificationInfoToAuth({
        accountId
      });
      const targetUserPrincipalName = ((): string => {
        if (!verificationValidators.length) {
          return '';
        }

        return verificationValidators[0].targetUserPrincipalName;
      })();
      const verificationOrBindValidators = ((): TGetVerificationInfoToAuthData[] => {
        const validators: TGetVerificationInfoToAuthData[] = [...verificationValidators];

        // 将绑定 MFA 也融入场景中
        if (validatorsIncludesMfaToBind) {
          validators.push({
            deviceType: 'bind_mfa'
          });
        }

        return validators;
      })();
      
      return {
        dialogType: EDialogType.SUB_RISK_VERIFICATION_AUTH,
        subBindMfaStep: ESubBindMfaStep.CHOOSE_BIND_MFA_TYPE,
        subVerificationDeviceType: verificationValidators[0].deviceType,
        subIdentityServiceData: {
          dataType: ESubIdentityServiceType.GET_VERIFICATION_INFO_TO_AUTH,
          data: {
            targetUserPrincipalName,
            verificationOrBindValidators
          }
        }
      };
    }

    if (riskType === ERiskType.NEW_MAIN) {
      return {
        dialogType: EDialogType.NEW_MAIN_RISK,
        newMainAccountRiskInfo: {
          verifyType: riskInfo.verifyType,
          verifyUrl: riskInfo.verifyUrl
        }
      };
    }
  
    if (riskType === ERiskType.OLD_MAIN) {
      return {
        dialogType: EDialogType.OLD_MAIN_OR_MPK_RISK,
        oldMainOrMpkRiskInfo: {
          isMpk: false,
          verifyType: riskInfo.verifyType,
          mpkIsDowngrade: riskInfo.mpkIsDowngrade
        }
      };
    }

    return {
      dialogType: EDialogType.OLD_MAIN_OR_MPK_RISK,
      oldMainOrMpkRiskInfo: {
        isMpk: riskInfo.isMpk,
        verifyType: riskInfo.verifyType,
        mpkIsDowngrade: riskInfo.mpkIsDowngrade
      }
    };
  } catch (error) {
    return {
      dialogType: EDialogType.ERROR,
      apiErrorMessage: (error as FetcherError).message
    };
  }
}