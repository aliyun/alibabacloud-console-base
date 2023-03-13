import {
  dataSkipBindMfa
} from '@alicloud/console-fetcher-risk-data';

import {
  IRiskPromptVerifyResult
} from '../../../types';

interface IProps {
  accountId: string;
  codeType: string;
}

export default async function skipBindAuthMfa({
  accountId,
  codeType
}: IProps): Promise<IRiskPromptVerifyResult> {
  const skipBindMfaData = await dataSkipBindMfa({
    accountId,
    ext: JSON.stringify({
      codeType
    })
  });

  return {
    verifyType: 'ga' as const,
    verifyCode: skipBindMfaData.ivToken || ''
  };
}