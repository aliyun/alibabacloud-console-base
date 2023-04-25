import {
  EAccountType,
  dataSendCode,
  dataSendCodeOld
} from '@alicloud/console-fetcher-risk-data';

import {
  ERiskType
} from '../enum';
import {
  TSendVerifyCodeProps
} from '../types';

export default async function sendVerifyCode(props: TSendVerifyCodeProps): Promise<string> {
  const {
    riskType, accountId, codeType, verifyType, verifyDetail
  } = props;

  // 旧版主账号风控手机、邮箱验证码发送接口
  if (riskType === ERiskType.OLD_MAIN) {
    const sendCodeData = await dataSendCodeOld({
      codeType,
      verifyType
    });
  
    return sendCodeData.requestId;
  }

  // 子账号风控/MPK 账号手机、邮箱验证码发送接口
  const identitySendCodeData = await dataSendCode({
    accountId,
    verifyType,
    // 子账号发送验证码接口需要 verifyDetail（手机号码或者邮箱地址）
    verifyDetail: String(verifyDetail),
    accountType: riskType === ERiskType.NEW_SUB ? EAccountType.SUB : EAccountType.MAIN,
    ext: JSON.stringify({
      codeType
    })
  });

  return identitySendCodeData.requestId;
}