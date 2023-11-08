import React from 'react';

import {
  open
} from '@alicloud/console-base-rc-dialog';

import {
  EDialogType,
  ERiskType,
  ESceneKey
} from '../../enum';
import {
  ICommonRiskInfo,
  IDialogData,
  IRiskPromptResolveData,
  TRiskInfo,
  TOldMainRiskExtraConfig,
  TSetRiskCanceledErrorProps,
  TReRequestWithVerifyResult
} from '../../types';
import {
  DEFAULT_DIALOG_SIZE,
  DEFAULT_PRIMARY_BUTTON_DISABLE_OBJECT
} from '../../const';
import DialogTitleForMultipleValidators from '../../rc/dialog-title-for-multiple-validators';
import intl from '../../intl';
import {
  slsRiskStartUp
} from '../../sls';
import {
  intlVerifyDialogTitle,
  getAccountIdFromRiskInfo,
  getSubVerificationSettingUrl,
  getOldMainOrMpkAccountRiskInfo
} from '../../util';
import DialogContent from '../dialog-content';

import {
  generateMpkSubmitButton,
  generateSubSubmitButton,
  generateOldMainOrDowngradeMpkSubmitButton
} from './dialog-button';
import getPartialDialogDataBasedOnRiskInfo from './get-partial-dialog-data-based-on-risk-info';

interface IOpenDialogProps {
  riskInfo: TRiskInfo;
  oldMainRiskExtraConfig: TOldMainRiskExtraConfig;
  setRiskCanceledErrorProps: TSetRiskCanceledErrorProps;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}

export default async function openDialog({
  riskInfo,
  oldMainRiskExtraConfig: {
    URL_SETTINGS,
    URL_SEND_CODE,
    REQUEST_METHOD
  },
  setRiskCanceledErrorProps,
  reRequestWithVerifyResult
}: IOpenDialogProps): Promise<IRiskPromptResolveData> {
  const {
    riskType, codeType
  } = riskInfo;

  slsRiskStartUp({
    riskType
  });
  const accountId = getAccountIdFromRiskInfo(riskInfo);
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
      const subValidatorsLength = data.subGetVerificationToAuthData?.subValidators.length ?? 0;

      if (subValidatorsLength > 1) {
        return <DialogTitleForMultipleValidators />;
      }

      return intlVerifyDialogTitle({
        dialogType: data.dialogType,
        currentSubVerificationDeviceType: data.currentSubVerificationDeviceType
      });
    },
    data: {
      ...dialogData,
      // 用户未输入验证码之前，按钮置灰
      primaryButtonDisabledObject: DEFAULT_PRIMARY_BUTTON_DISABLE_OBJECT
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
      setRiskCanceledErrorProps,
      reRequestWithVerifyResult,
      oldMainAccountUrlSetting: URL_SETTINGS,
      oldMainSendCodeUrl: URL_SEND_CODE,
      oldMainSendCodeMethod: REQUEST_METHOD
    }} />,
    buttons: (data: IDialogData) => {
      const buttonCancel = intl('op:cancel');

      switch (data.dialogType) {
        // 错误时的弹窗
        case EDialogType.ERROR: {
          return [buttonCancel];
        }
        // 子账号风控验证
        case EDialogType.SUB_RISK_VERIFICATION_AUTH: {
          // 没有解析到合法的子账号核身方式，隐藏确定按钮
          if (data.hideSubRiskSubmitButton) {
            // 如果子账号 ID 不为空，展示设置按钮
            if (accountId) {
              return [{
                label: intl('op:risk_invalid_go'),
                spm: 'add',
                href: getSubVerificationSettingUrl(accountId)
              }, buttonCancel];
            }

            return [buttonCancel];
          }

          const primaryButtonDisabled = ((): boolean => {
            if (!data.currentSubVerificationDeviceType) {
              return false;
            }

            return Boolean(data.primaryButtonDisabledObject[data.currentSubVerificationDeviceType]);
          })();

          const verifyMfaPrimaryButton = generateSubSubmitButton({
            primaryButtonDisabled,
            reRequestWithVerifyResult,
            setRiskCanceledErrorProps
          });
          
          return [verifyMfaPrimaryButton, buttonCancel];
        }
        // 新版主账号风控验证
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
        // 旧版主账号或者 MPK 账号验证
        default: {
          const {
            isMpk, mpkIsDowngrade, verifyType
          } = getOldMainOrMpkAccountRiskInfo(data.mainAccountRiskInfo);

          if (isMpk && !mpkIsDowngrade) {
            const mpkSubmitButton = generateMpkSubmitButton({
              codeType,
              accountId,
              verifyType,
              setRiskCanceledErrorProps,
              reRequestWithVerifyResult,
              primaryButtonDisabled: data.primaryButtonDisabledObject[ESceneKey.MAIN_ACCOUNT]
            });

            return [mpkSubmitButton, buttonCancel];
          }

          const oldMainOrDowngradeMpkSubmitButton = generateOldMainOrDowngradeMpkSubmitButton({
            verifyType,
            reRequestWithVerifyResult,
            setRiskCanceledErrorProps,
            primaryButtonDisabled: data.primaryButtonDisabledObject[ESceneKey.MAIN_ACCOUNT]
          });

          return [oldMainOrDowngradeMpkSubmitButton, buttonCancel];
        }
      }
    },
    undefinedAsReject: true // 点击取消或右上角的 X 会调用 reject 逻辑，后续处理会走到 catch 逻辑并且 error 是 undefined
  });
}
