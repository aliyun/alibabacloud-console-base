import React from 'react';

import {
  open
} from '@alicloud/console-base-rc-dialog';

import {
  TRiskInfo,
  IDialogData,
  IRiskConfig,
  IRiskPromptResolveData
} from '../../types';
import {
  EDialogType,
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
  generateMpkSubmitButtonFn,
  generateSkipBindMfaButton,
  generateChooseMfaNextButton,
  generateBindMfaPreviousStepButton,
  generateOldMainOrDowngradeMpkSubmitButtonFn,
  generateSubAccountMfaSubmitButtonFn
} from './dialog-button';

export default async function openDialog(riskInfo: TRiskInfo, riskConfig: Required<IRiskConfig>): Promise<IRiskPromptResolveData> {
  const {
    riskType, codeType, verifyType, verifyDetail, convertedVerifyType
  } = riskInfo;
  const accountId = 'accountId' in riskInfo ? riskInfo.accountId : 'EMPTY_ACCOUNT_ID';
  const dialogData = await getPartialDialogDataBasedOnRiskInfo(riskInfo);

  slsRiskStartUp({
    riskType
  });
  const generateButtonFnCommonProps = {
    accountId,
    verifyType
  };
  const generateSubAccountSubmitButton = generateSubAccountMfaSubmitButtonFn({
    verifyType
  });
  const generateMpkSubmitButton = generateMpkSubmitButtonFn({
    ...generateButtonFnCommonProps,
    codeType
  });
  const generateOldMainOrDowngradeMpkSubmitButton = generateOldMainOrDowngradeMpkSubmitButtonFn({
    verifyType
  });

  return open<IRiskPromptResolveData, IDialogData>({
    title: (data: IDialogData) => {
      const {
        dialogType
      } = data;

      return intlVerifyDialogTitle(dialogType);
    },
    data: {
      dialogType: dialogData.dialogType,
      primaryButtonDisabled: dialogData.dialogType === EDialogType.OLD_MAIN_OR_MPK_RISK, // 只有在旧版主账号风控的时候，primaryButtonDisabled 的初始值才为 true
      newMainAccountRiskInfo: dialogData.newMainAccountRiskInfo,
      oldMainOrMpkRiskInfo: dialogData.oldMainOrMpkRiskInfo,
      subAccountIdentityServiceData: dialogData.subAccountIdentityServiceData
    },
    size: (data: IDialogData) => {
      switch (data.dialogType) {
        // 这三种情况需要适配移动端
        case EDialogType.SUB_RISK_VMFA_AUTH:
        case EDialogType.SUB_RISK_U2F_AUTH:
        case EDialogType.OLD_MAIN_OR_MPK_RISK:
          return DEFAULT_DIALOG_SIZE;
        default:
          return 'm';
      }
    },
    content: <DialogContent {...{
      accountId,
      codeType,
      verifyDetail,
      verifyType,
      convertedVerifyType,
      urlSetting: riskConfig.urlSetting,
      coolingAfterSent: riskConfig.coolingAfterSent,
      coolingAfterSentFail: riskConfig.coolingAfterSentFail
    }} />,
    buttons: (data: IDialogData) => {
      const buttonCancel = intl('op:cancel');
      const primaryButtonDisabled = data.primaryButtonDisabled || false;

      switch (data.dialogType) {
        case EDialogType.ERROR: {
          return [buttonCancel];
        }
        case EDialogType.SUB_RISK_MFA_CHOOSE: {
          const skipBindMfaButton = generateSkipBindMfaButton({
            ...generateButtonFnCommonProps,
            codeType
          });
          const chooseMfaNextButton = generateChooseMfaNextButton();
          const chooseMfaPrimaryButton = {
            ...chooseMfaNextButton,
            disable: primaryButtonDisabled
          };

          return [chooseMfaPrimaryButton, skipBindMfaButton, buttonCancel];
        }
        case EDialogType.SUB_RISK_U2F_BIND:
        case EDialogType.SUB_RISK_VMFA_BIND: {
          const bindMfaPrimaryButton = generateSubAccountSubmitButton('bind', primaryButtonDisabled);
          const bindMfaPreviousStepButton = generateBindMfaPreviousStepButton();

          return [bindMfaPreviousStepButton, bindMfaPrimaryButton, buttonCancel];
        }
        case EDialogType.SUB_RISK_U2F_AUTH:
        case EDialogType.SUB_RISK_VMFA_AUTH: {
          const verifyMfaPrimaryButton = generateSubAccountSubmitButton('verify', primaryButtonDisabled);
          
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

          if (isMpk && !mpkIsDowngrade) {
            const mpkSubmitButton = generateMpkSubmitButton(primaryButtonDisabled);

            return [mpkSubmitButton, buttonCancel];
          }

          const oldMainOrDowngradeMpkSubmitButton = generateOldMainOrDowngradeMpkSubmitButton(primaryButtonDisabled);

          return [oldMainOrDowngradeMpkSubmitButton, buttonCancel];
        }
      }
    },
    undefinedAsReject: true // 点击取消或右上角的 X 会调用 reject 逻辑，后续处理会走到 catch 逻辑并且 error 是 undefined
  });
}