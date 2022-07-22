import _callAliyun from './_call-aliyun';

interface IResult {
  otpCode: string;
}

export default async function getVmfaCode(): Promise<string> {
  const result = await _callAliyun<IResult>('getMFAOtpCode');

  return result.otpCode;
}