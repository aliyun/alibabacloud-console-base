import {
  dataVerifyMpk
} from '@alicloud/console-fetcher-risk-data';

import {
  IMainAccountData,
  IRiskPromptVerifyResult
} from '../../../types';

interface IProps {
  accountId: string;
  codeType: string;
  verifyType: string;
  mainOrMpkAccountData?: IMainAccountData;
}

export default async function verifyMpk({
  accountId,
  codeType,
  verifyType,
  mainOrMpkAccountData
}: IProps): Promise<IRiskPromptVerifyResult> {
  const {
    code,
    requestId
  } = mainOrMpkAccountData ?? {};

  const verifyMpkData = await dataVerifyMpk({
    accountId,
    verifyType,
    authCode: code || '',
    riskRequestId: requestId || '',
    ext: JSON.stringify({
      codeType
    })
  });

  return {
    verifyType,
    verifyCode: verifyMpkData.ivToken || ''
  };
}