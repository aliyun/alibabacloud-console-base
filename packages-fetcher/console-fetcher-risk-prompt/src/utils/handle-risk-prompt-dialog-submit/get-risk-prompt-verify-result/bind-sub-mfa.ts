import {
  dataBindMfa,
  ParamsBindMfa
} from '@alicloud/console-fetcher-risk-data';

import {
  IRiskPromptVerifyResult
} from '../../../types';
import intl from '../../../intl';

interface IBidSubMfaProps {
  subBindMfaParams?: ParamsBindMfa;
  updateErrorMessage: (errorMessage: string) => void;
}

export default async function bindSubMfa({
  subBindMfaParams,
  updateErrorMessage
}: IBidSubMfaProps): Promise<IRiskPromptVerifyResult | null> {
  if (subBindMfaParams) {
    const bindMfaData = await dataBindMfa(subBindMfaParams);

    return {
      verifyType: 'ga' as const,
      verifyCode: bindMfaData.ivToken || ''
    };
  }

  updateErrorMessage(intl('message:invalid:sub:validator'));

  return null;
}