import {
  dataSendCode,
  dataSendCodeOld
} from '@alicloud/console-fetcher-risk-data';

import {
  TSendVerifyCodeProps
} from './type';

export default async function sendVerifyCode(props: TSendVerifyCodeProps): Promise<string> {
  const {
    formType, accountId, codeType, verifyType, verifyDetail
  } = props;

  if (formType === 'mpk_or_sub_identity') {
    const identitySendCodeData = await dataSendCode({
      accountId,
      verifyType,
      // 子账号发送验证码接口需要 verifyDetail（手机号码或者邮箱地址）
      verifyDetail: String(verifyDetail),
      accountType: props.accountType,
      ext: JSON.stringify({
        codeType
      })
    });

    return identitySendCodeData.requestId;
  }

  const sendCodeData = await dataSendCodeOld({
    codeType,
    verifyType
  });

  return sendCodeData.requestId;
}