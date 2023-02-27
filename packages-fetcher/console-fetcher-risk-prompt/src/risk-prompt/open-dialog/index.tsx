import React from 'react';

import {
  open
} from '@alicloud/console-base-rc-dialog';
import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  TRiskInfo,
  IDialogData,
  IRiskConfig,
  ICommonRiskInfo,
  IRiskPromptResolveData
} from '../../types';
import {
  ERiskType,
  EDialogType
} from '../../enum';
import {
  DEFAULT_RISK_CONFIG,
  DEFAULT_DIALOG_SIZE
} from '../../const';
import intl from '../../intl';
import {
  slsRiskStartUp
} from '../../sls';
import {
  intlVerifyDialogTitle,
  getOldMainOrMpkAccountRiskInfo,
  getPartialDialogDataBasedOnRiskInfo
} from '../../utils';
import DialogContent from '../dialog-content';

import {
  generateMpkSubmitButton,
  generateSubSubmitButton,
  generateSubBindMfaButton,
  generateOldMainOrDowngradeMpkSubmitButton
} from './dialog-button';

export default async function openDialog(riskInfo: TRiskInfo, riskConfig?: IRiskConfig): Promise<IRiskPromptResolveData> {
  const {
    riskType, codeType
  } = riskInfo;

  slsRiskStartUp({
    riskType
  });
  const {
    urlSetting, coolingAfterSent, coolingAfterSentFail
  } = DEFAULT_RISK_CONFIG;
  const accountId = 'accountId' in riskInfo ? riskInfo.accountId : 'EMPTY_ACCOUNT_ID';
  const dialogData = await getPartialDialogDataBasedOnRiskInfo(riskInfo);

  const oldMainOrMpkVerifyInfo = ((): Omit<ICommonRiskInfo, 'codeType'> | undefined => {
    if (riskType === ERiskType.MPK || riskType === ERiskType.OLD_MAIN) {
      return {
        verifyType: riskInfo.verifyType,
        verifyDetail: riskInfo.verifyDetail,
        convertedVerifyType: riskInfo.convertedVerifyType
      };
    }
  })();

  return open<IRiskPromptResolveData, IDialogData>({
    title: (data: IDialogData) => {
      const {
        dialogType, subBindMfaStep, subVerificationDeviceType
      } = data;

      return intlVerifyDialogTitle({
        dialogType,
        subBindMfaStep,
        subVerificationDeviceType
      });
    },
    data: {
      ...dialogData,
      // 用户未输入验证码之前，按钮置灰
      primaryButtonDisabledObject: {
        [ESubVerificationDeviceType.EMAIL]: true,
        [ESubVerificationDeviceType.SMS]: true,
        [ESubVerificationDeviceType.VMFA]: true,
        [ESubVerificationDeviceType.U2F]: true,
        main_account: true
      }
    },
    size: (data: IDialogData) => {
      switch (data.dialogType) {
        // 适配移动端
        case EDialogType.SUB_RISK_VERIFICATION_AUTH:
        case EDialogType.OLD_MAIN_OR_MPK_RISK:
          return DEFAULT_DIALOG_SIZE;
        default:
          return 'm';
      }
    },
    content: <DialogContent {...{
      codeType,
      accountId,
      oldMainOrMpkVerifyInfo,
      urlSetting: riskConfig?.urlSetting || urlSetting,
      coolingAfterSent: riskConfig?.coolingAfterSent || coolingAfterSent,
      coolingAfterSentFail: riskConfig?.coolingAfterSentFail || coolingAfterSentFail
    }} />,
    buttons: (data: IDialogData) => {
      const buttonCancel = intl('op:cancel');
      const subRiskBindMfaInVerificationAuth = data.dialogType === EDialogType.SUB_RISK_VERIFICATION_AUTH && data.subVerificationDeviceType === 'bind_mfa';

      if (subRiskBindMfaInVerificationAuth || data.dialogType === EDialogType.SUB_RISK_MFA_BIND) {
        const bindMfaButtons = generateSubBindMfaButton({
          codeType,
          accountId,
          subBindMfaStep: data.subBindMfaStep
        });

        return [...bindMfaButtons, buttonCancel];
      }

      switch (data.dialogType) {
        case EDialogType.ERROR: {
          return [buttonCancel];
        }
        case EDialogType.SUB_RISK_VERIFICATION_AUTH: {
          const primaryButtonDisabled = ((): boolean => {
            if (!data.subVerificationDeviceType || data.subVerificationDeviceType === 'bind_mfa') {
              return false;
            }

            return data.primaryButtonDisabledObject[data.subVerificationDeviceType];
          })();

          const verifyMfaPrimaryButton = generateSubSubmitButton({
            primaryButtonDisabled
          });
          
          return [verifyMfaPrimaryButton, buttonCancel];
        }
        case EDialogType.NEW_MAIN_RISK: {
          const showCancelButton = ((): boolean => {
            if (data.mainAccountRiskInfo?.type === 'new_main') {
              return data.mainAccountRiskInfo.riskInfo.hasCancelButton ?? false;
            }

            return false;
          })();

          if (showCancelButton) {
            return [buttonCancel];
          }

          return [];
        }
        default: {
          const {
            isMpk, mpkIsDowngrade, verifyType
          } = getOldMainOrMpkAccountRiskInfo(data.mainAccountRiskInfo);

          if (isMpk && !mpkIsDowngrade) {
            const mpkSubmitButton = generateMpkSubmitButton({
              codeType,
              accountId,
              verifyType,
              primaryButtonDisabled: data.primaryButtonDisabledObject.main_account
            });

            return [mpkSubmitButton, buttonCancel];
          }

          const oldMainOrDowngradeMpkSubmitButton = generateOldMainOrDowngradeMpkSubmitButton({
            verifyType,
            primaryButtonDisabled: data.primaryButtonDisabledObject.main_account
          });

          return [oldMainOrDowngradeMpkSubmitButton, buttonCancel];
        }
      }
    },
    undefinedAsReject: true // 点击取消或右上角的 X 会调用 reject 逻辑，后续处理会走到 catch 逻辑并且 error 是 undefined
  });
}