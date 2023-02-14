import React from 'react';

import {
  open
} from '@alicloud/console-base-rc-dialog';

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
      primaryButtonDisabled: dialogData.dialogType === EDialogType.OLD_MAIN_OR_MPK_RISK
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
      const primaryButtonDisabled = data.primaryButtonDisabled || false;
      const subRiskBindMfaInVerificationAuth = data.dialogType === EDialogType.SUB_RISK_VERIFICATION_AUTH && data.subVerificationDeviceType === 'bind_mfa';

      if (subRiskBindMfaInVerificationAuth || data.dialogType === EDialogType.SUB_RISK_MFA_BIND) {
        const bindMfaButtons = generateSubBindMfaButton({
          codeType,
          accountId,
          primaryButtonDisabled,
          subBindMfaStep: data.subBindMfaStep
        });

        return [...bindMfaButtons, buttonCancel];
      }

      switch (data.dialogType) {
        case EDialogType.ERROR: {
          return [buttonCancel];
        }
        case EDialogType.SUB_RISK_VERIFICATION_AUTH: {
          const verifyMfaPrimaryButton = generateSubSubmitButton({
            primaryButtonDisabled
          });
          
          return [verifyMfaPrimaryButton, buttonCancel];
        }
        case EDialogType.NEW_MAIN_RISK: {
          const showCancelButton = data.newMainAccountRiskInfo?.hasCancelButton || false;

          if (showCancelButton) {
            return [buttonCancel];
          }

          return [];
        }
        default: {
          const isMpk = data.oldMainOrMpkRiskInfo?.isMpk ?? false;
          const mpkIsDowngrade = data.oldMainOrMpkRiskInfo?.mpkIsDowngrade ?? true;
          const verifyType = data.oldMainOrMpkRiskInfo?.verifyType || '';

          if (isMpk && !mpkIsDowngrade) {
            const mpkSubmitButton = generateMpkSubmitButton({
              codeType,
              accountId,
              verifyType,
              primaryButtonDisabled
            });

            return [mpkSubmitButton, buttonCancel];
          }

          const oldMainOrDowngradeMpkSubmitButton = generateOldMainOrDowngradeMpkSubmitButton({
            verifyType,
            primaryButtonDisabled
          });

          return [oldMainOrDowngradeMpkSubmitButton, buttonCancel];
        }
      }
    },
    undefinedAsReject: true // 点击取消或右上角的 X 会调用 reject 逻辑，后续处理会走到 catch 逻辑并且 error 是 undefined
  });
}