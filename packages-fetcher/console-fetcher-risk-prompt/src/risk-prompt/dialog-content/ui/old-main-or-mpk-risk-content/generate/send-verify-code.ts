import {
  EAccountType,
  dataSendCode,
  dataSendCodeOld
} from '@alicloud/console-fetcher-risk-data';

interface ISendCodeProps {
  codeType: string;
  accountId: string;
  verifyType: string;
  useMpkSendCodeApi: boolean;

}

export default async function sendVerifyCode({
  codeType,
  accountId,
  verifyType,
  useMpkSendCodeApi
}: ISendCodeProps): Promise<string> {
  if (useMpkSendCodeApi) {
    const mpkSendCodeData = await dataSendCode({
      accountId,
      verifyType,
      accountType: EAccountType.MAIN,
      ext: JSON.stringify({
        codeType
      })
    });
  
    return mpkSendCodeData.requestId;
  }

  const sendCodeData = await dataSendCodeOld({
    codeType,
    verifyType
  });

  return sendCodeData.requestId;
}