import {
  FetcherError
} from '@alicloud/fetcher';

import {
  IDialogData,
  IRiskPromptVerifyResult,
  TDialogSubmitProps,
  TSetRiskCanceledErrorProps
} from '../../../types';
import {
  ERiskType,
  EUnexpectedErrorType
} from '../../../enum';
import {
  NETWORK_ERROR,
  COMMON_EXPECTED_ERROR,
  IDENTITY_EXPECTED_ERROR
} from '../../../const';

import verifyMpk from './verify-mpk';
import verifySubValidators from './verify-sub-validators';

interface IProps {
  dialogData: IDialogData;
  dialogSubmitProps: TDialogSubmitProps;
  updateErrorMessage: (errorMessage: string) => void;
  setRiskCanceledErrorProps: TSetRiskCanceledErrorProps;
}

/**
 * 根据 dialogSubmitType，执行不同的 API 对风控码进行验证，并返回验证结果。
 * 当 API 报错或者调用 API 的风控参数不合法时，返回 null
 */
export default async function getRiskPromptVerifyResult({
  dialogData,
  dialogSubmitProps,
  updateErrorMessage,
  setRiskCanceledErrorProps
}: IProps): Promise<IRiskPromptVerifyResult | null> {
  try {
    const {
      dialogSubmitType
    } = dialogSubmitProps;
    const {
      oldMainOrMpkData,
      subVerificationParamArray,
      currentSubVerificationDeviceType
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
      default: {
        return null;
      }
    }
  } catch (error) {
    const {
      code = '', name = '', message
    } = error as FetcherError;
    const isExpectedError = COMMON_EXPECTED_ERROR.includes(code) || IDENTITY_EXPECTED_ERROR.includes(code);

    // 判断错误是否是非预期错误，需要排除网络错误
    if (!isExpectedError && !NETWORK_ERROR.includes(name)) {
      const unexpectedErrorType = dialogSubmitProps.dialogSubmitType === ERiskType.MPK ? EUnexpectedErrorType.MPK_RISK_VERIFY_FAILED : EUnexpectedErrorType.SUB_RISK_VERIFY_FAILED;

      setRiskCanceledErrorProps({
        unexpectedErrorType,
        unexpectedError: code || name
      });
    }

    updateErrorMessage(message);

    return null;
  }
}
