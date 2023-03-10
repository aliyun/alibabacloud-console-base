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
  TAuthFormProps,
  IDialogData,
  IRiskPromptResolveData
} from '../types';
import {
  ERiskType,
  ESceneKey
} from '../enum';
import {
  useModelProps
} from '../model';
import type {
  IHandleInputChangeProps
} from '../rc/verify-code-input';
import {
  getUpdateSubVerificationParams
} from '../utils';

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
    riskType, verifyType
  } = authFormProps;

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
  const currentKeyOfErrorMessageObject = authFormProps.riskType === ERiskType.NEW_SUB ? authFormProps.verifyType : ESceneKey.MAIN_ACCOUNT;

  const getUpdateDataOnInputChange = useCallback((code: string): Partial<IDialogData> => {
    // 清空对应风控方式的 error
    const updatedAiErrorMessageObject = {
      errorMessageObject: {
        ...errorMessageObject,
        [currentKeyOfErrorMessageObject]: ''
      }
    };

    // OneConsole 旧版主账号类型
    if (riskType === ERiskType.OLD_MAIN) {
      return {
        ...updatedAiErrorMessageObject,
        mainOrMpkAccountData: {
          code,
          requestId: verifyUniqId
        }
      };
    }

    // MPK 类型账号
    if (riskType === ERiskType.MPK) {
      return {
        ...updatedAiErrorMessageObject,
        mainOrMpkAccountData: {
          code,
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
  }, [accountId, codeType, verifyType, riskType, verifyUniqId, subVerificationParamArray, errorMessageObject, currentKeyOfErrorMessageObject]);

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