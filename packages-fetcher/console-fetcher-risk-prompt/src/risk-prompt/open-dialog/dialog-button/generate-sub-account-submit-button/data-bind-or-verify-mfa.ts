import {
  DataTokenVerify,
  ParamsBindMfa,
  ParamsVerifySubAccountMfa,
  dataBindMfa,
  dataVerifySubAccountMfa
} from '@alicloud/console-fetcher-risk-data';

interface IBindOrVerifyMfaProps {
  submitType: 'verify' | 'bind';
  bindMfaParams?: ParamsBindMfa | null;
  verifyMfaParams?: ParamsVerifySubAccountMfa | null;
}

export default async function dataBindOrVerifyMfa({
  submitType,
  bindMfaParams,
  verifyMfaParams
}: IBindOrVerifyMfaProps): Promise<DataTokenVerify | undefined> {
  if (submitType === 'bind' && bindMfaParams) {
    const bindMfaIvToken = await dataBindMfa(bindMfaParams);

    return bindMfaIvToken;
  }

  if (submitType === 'verify' && verifyMfaParams) {
    const verifyMfaIvToken = await dataVerifySubAccountMfa(verifyMfaParams);

    return verifyMfaIvToken;
  }
}