import {
  EAccountType,
  dataSendCode,
  dataSendCodeOld
} from '@alicloud/console-fetcher-risk-data';
import {
  FetcherError
} from '@alicloud/fetcher';

import {
  TSendVerifyCodeProps,
  TSetRiskCanceledErrorProps
} from '../types';
import {
  ERiskType,
  EUnexpectedErrorType
} from '../enum';
import {
  NETWORK_ERROR,
  SEND_VERIFY_CODE_EXPECTED_ERROR
} from '../const';

type TProps = TSendVerifyCodeProps & {
  setRiskCanceledErrorProps: TSetRiskCanceledErrorProps;
}

export default async function sendVerifyCode({
  setRiskCanceledErrorProps,
  ...props
}: TProps): Promise<string> {
  try {
    const {
      riskType, accountId, codeType, verifyType, verifyDetail
    } = props;
  
    // 旧版主账号风控手机、邮箱验证码发送接口
    if (riskType === ERiskType.OLD_MAIN) {
      const sendCodeData = await dataSendCodeOld({
        codeType,
        verifyType,
        sendCodeMethod: props.sendCodeMethod,
        sendCodeUrl: props.sendCodeUrl
      });
    
      return sendCodeData.requestId;
    }
  
    // 子账号风控/MPK 账号手机、邮箱验证码发送接口
    const identitySendCodeData = await dataSendCode({
      accountId,
      verifyType,
      // 子账号发送验证码接口需要 verifyDetail（手机号码或者邮箱地址，手机号码需要带上区号）
      verifyDetail: String(verifyDetail),
      accountType: riskType === ERiskType.NEW_SUB ? EAccountType.SUB : EAccountType.MAIN,
      ext: JSON.stringify({
        codeType
      })
    });
  
    return identitySendCodeData.requestId;
  } catch (error) {
    const {
      code = '', name = ''
    } = error as FetcherError;

    // 判断错误是否是预期内错误，需要排除网络错误
    if (!SEND_VERIFY_CODE_EXPECTED_ERROR.includes(code) && !NETWORK_ERROR.includes(name)) {
      const unexpectedErrorType = ((): EUnexpectedErrorType => {
        if (props.riskType === ERiskType.MPK) {
          return EUnexpectedErrorType.MPK_SEND_VERIFY_CODE_ERROR;
        }

        if (props.riskType === ERiskType.NEW_SUB) {
          return EUnexpectedErrorType.SUB_SEND_VERIFY_CODE_ERROR;
        }

        return EUnexpectedErrorType.OLD_MAIN_SEND_VERIFY_CODE_ERROR;
      })();

      setRiskCanceledErrorProps({
        unexpectedErrorType,
        unexpectedErrorCode: code || name
      });
    }

    // 需要把错误抛出供下游消费
    throw error;
  }
}