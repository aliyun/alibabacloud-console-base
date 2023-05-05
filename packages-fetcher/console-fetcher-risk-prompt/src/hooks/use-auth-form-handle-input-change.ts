import {
  useCallback
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  ERiskType,
  ESceneKey
} from '../enum';
import {
  TAuthFormProps,
  IDialogData,
  IRiskPromptResolveData
} from '../types';
import {
  getUpdateSubVerificationParams
} from '../util';
import {
  useModelProps
} from '../model';
import type {
  IHandleInputChangeProps
} from '../rc/verify-code-input';

interface IHookProps {
  verifyUniqId: string;
  authFormProps: TAuthFormProps;
}

interface IHookResult {
  handleInputChange: (payload: IHandleInputChangeProps) => void;
}

export default function useAuthFormHandleInputChange({
  authFormProps,
  verifyUniqId
}: IHookProps): IHookResult {
  const {
    codeType,
    accountId
  } = useModelProps();
  const {
    data: {
      errorMessageObject,
      subVerificationParamArray
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const {
    riskType, verifyType
  } = authFormProps;
  const isMpkDowngrade = riskType === ERiskType.OLD_MAIN && authFormProps.isMpkDowngrade;
  const currentKeyOfErrorMessageObject = riskType === ERiskType.NEW_SUB ? verifyType : ESceneKey.MAIN_ACCOUNT;

  const getUpdateDataOnInputChange = useCallback((code: string): Partial<IDialogData> => {
    // 清空对应风控方式的 error
    const updatedAiErrorMessageObject = {
      errorMessageObject: {
        ...errorMessageObject,
        [currentKeyOfErrorMessageObject]: ''
      }
    };

    // OneConsole 旧版主账号类型或者 MPK 类型账号
    if (riskType === ERiskType.MPK || riskType === ERiskType.OLD_MAIN) {
      return {
        ...updatedAiErrorMessageObject,
        oldMainOrMpkData: {
          code,
          isMpkDowngrade,
          requestId: verifyUniqId
        }
      };
    }
  
    // 手机或邮箱方式的子账号风控
    if ([ESubVerificationDeviceType.EMAIL, ESubVerificationDeviceType.SMS].includes(verifyType)) {
      return {
        ...updatedAiErrorMessageObject,
        subVerificationParamArray: getUpdateSubVerificationParams({
          currentSubVerificationParams: subVerificationParamArray,
          paramsToUpdate: {
            accountId,
            verifyType,
            verifyUniqId,
            authCode: code,
            ext: JSON.stringify({
              codeType
            })
          }
        })
      };
    }

    // Vmfa 类型的子账号风控
    return {
      ...updatedAiErrorMessageObject,
      subVerificationParamArray: getUpdateSubVerificationParams({
        currentSubVerificationParams: subVerificationParamArray,
        paramsToUpdate: {
          accountId,
          authCode: code,
          verifyType: ESubVerificationDeviceType.VMFA,
          ext: JSON.stringify({
            codeType
          })
        }
      })
    };
  }, [accountId, codeType, verifyType, riskType, isMpkDowngrade, subVerificationParamArray, errorMessageObject, currentKeyOfErrorMessageObject, verifyUniqId]);

  const handleInputChange = useCallback((payload: IHandleInputChangeProps): void => {
    const {
      verifyCode
    } = payload;
    const trimmedValue = verifyCode.trim();
    const dataToUpdate = getUpdateDataOnInputChange(trimmedValue);

    updateData(dataToUpdate);
  }, [updateData, getUpdateDataOnInputChange]);

  return {
    handleInputChange
  };
}
