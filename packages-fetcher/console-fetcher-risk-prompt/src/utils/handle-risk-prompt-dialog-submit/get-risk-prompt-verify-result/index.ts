import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  IDialogData,
  IRiskPromptVerifyResult,
  TDialogSubmitProps
} from '../../../types';
import {
  ERiskType
} from '../../../enum';

import bindSubMfa from './bind-sub-mfa';
import skipBindSubMfa from './skip-bind-sub-mfa';
import verifyMpk from './verify-mpk';
import verifySubValidators from './verify-sub-validators';

interface IProps {
  dialogData: IDialogData;
  verifyProps: TDialogSubmitProps;
  updateErrorMessage: (errorMessage: string) => void;
}

/**
 * 根据 dialogSubmitType，执行不同的 API 对风控码进行验证，并返回验证结果。
 * 当 API 报错或者调用 API 的风控参数不合法时，返回 null
 */
export default async function getRiskPromptVerifyResult({
  dialogData,
  verifyProps,
  updateErrorMessage
}: IProps): Promise<IRiskPromptVerifyResult | null> {
  try {
    const {
      dialogSubmitType
    } = verifyProps;
    const {
      currentSubVerificationDeviceType,
      mainOrMpkAccountData,
      subBindMfaParams,
      subVerificationParamArray
    } = dialogData;
  
    switch (dialogSubmitType) {
      case ERiskType.MPK: {
        const {
          accountId, codeType, verifyType
        } = verifyProps;
  
        const mpkVerifyResult = await verifyMpk({
          accountId,
          codeType,
          verifyType,
          mainOrMpkAccountData
        });
  
        return mpkVerifyResult;
      }
      case ERiskType.NEW_SUB: {
        const subValidatorsVerifyResult = await verifySubValidators({
          subVerificationParamArray,
          currentSubVerificationDeviceType,
          updateErrorMessage
        });
  
        return subValidatorsVerifyResult;
      }
      case 'bind_mfa': {
        const bindMfaVerifyResult = await bindSubMfa({
          subBindMfaParams,
          updateErrorMessage
        });
  
        return bindMfaVerifyResult;
      }
      case 'skip_bind_mfa': {
        const {
          accountId, codeType
        } = verifyProps;
  
        const skipBindMfaVerifyResult = await skipBindSubMfa({
          accountId,
          codeType
        });
  
        return skipBindMfaVerifyResult;
      }
      default: {
        const {
          verifyType
        } = verifyProps;
        const {
          code, requestId
        } = mainOrMpkAccountData ?? {};
  
        return {
          verifyType,
          verifyCode: code || '',
          requestId: requestId || ''
        };
      }
    }
  } catch (error) {
    updateErrorMessage((error as FetcherError).message);

    return null;
  }
}