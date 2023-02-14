import {
  dataSendCode,
  dataSendCodeOld
} from '@alicloud/console-fetcher-risk-data';

import {
  TSendVerifyCodeProps
} from './type';

export default async function sendVerifyCode(props: TSendVerifyCodeProps): Promise<string> {
  const {
    apiType, accountId, codeType, verifyType
  } = props;

  if (apiType === 'identity_send_code') {
    const identitySendCodeData = await dataSendCode({
      accountId,
      verifyType,
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