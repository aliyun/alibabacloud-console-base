import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  IDialogData,
  IRiskPromptVerifyResult,
  TDialogSubmitProps
} from '../../../types';
import {
  ERiskType,
  EBindSceneDialogSubmitType
} from '../../../enum';

import bindSubMfa from './bind-sub-mfa';
import skipBindSubMfa from './skip-bind-sub-mfa';
import verifyMpk from './verify-mpk';
import verifySubValidators from './verify-sub-validators';

interface IProps {
  dialogData: IDialogData;
  dialogSubmitProps: TDialogSubmitProps;
  updateErrorMessage: (errorMessage: string) => void;
}

/**
 * 根据 dialogSubmitType，执行不同的 API 对风控码进行验证，并返回验证结果。
 * 当 API 报错或者调用 API 的风控参数不合法时，返回 null
 */
export default async function getRiskPromptVerifyResult({
  dialogData,
  dialogSubmitProps,
  updateErrorMessage
}: IProps): Promise<IRiskPromptVerifyResult | null> {
  try {
    const {
      dialogSubmitType
    } = dialogSubmitProps;
    const {
      currentSubVerificationDeviceType,
      oldMainOrMpkData,
      subBindMfaParams,
      subVerificationParamArray
    } = dialogData;
  
    switch (dialogSubmitType) {
      // MPK 类型账号风控验证
      case ERiskType.MPK: {
        const {
          accountId, codeType, verifyType
        } = dialogSubmitProps;
  
        const mpkVerifyResult = await verifyMpk({
          accountId,
          codeType,
          verifyType,
          oldMainOrMpkData
        });
  
        return mpkVerifyResult;
      }
      // 子账号风控验证
      case ERiskType.NEW_SUB: {
        const subValidatorsVerifyResult = await verifySubValidators({
          subVerificationParamArray,
          currentSubVerificationDeviceType,
          updateErrorMessage
        });
  
        return subValidatorsVerifyResult;
      }
      // 旧版主账号或 MPK 降级
      case ERiskType.OLD_MAIN: {
        const {
          verifyType
        } = dialogSubmitProps;
        const {
          code, requestId
        } = oldMainOrMpkData ?? {};
  
        return {
          verifyType,
          verifyCode: code || '',
          requestId: requestId || ''
        };
      }
      // 子账号风控绑定 MFA
      case EBindSceneDialogSubmitType.BIND_MFA: {
        const bindMfaVerifyResult = await bindSubMfa({
          subBindMfaParams,
          updateErrorMessage
        });
  
        return bindMfaVerifyResult;
      }
      // 子账号跳过 MFA 绑定
      case EBindSceneDialogSubmitType.SKIP_BIND_MFA: {
        const {
          accountId, codeType
        } = dialogSubmitProps;
  
        const skipBindMfaVerifyResult = await skipBindSubMfa({
          accountId,
          codeType
        });
  
        return skipBindMfaVerifyResult;
      }
      default: {
        return null;
      }
    }
  } catch (error) {
    updateErrorMessage((error as FetcherError).message);

    return null;
  }
}