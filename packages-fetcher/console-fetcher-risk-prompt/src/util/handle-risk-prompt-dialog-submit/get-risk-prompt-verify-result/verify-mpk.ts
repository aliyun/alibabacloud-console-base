import {
  dataVerifyMpk
} from '@alicloud/console-fetcher-risk-data';

import {
  IMainOrMpkData,
  IRiskPromptVerifyResult
} from '../../../types';

interface IProps {
  accountId: string;
  codeType: string;
  verifyType: string;
  oldMainOrMpkData?: IMainOrMpkData;
}

export default async function verifyMpk({
  accountId,
  codeType,
  verifyType,
  oldMainOrMpkData
}: IProps): Promise<IRiskPromptVerifyResult> {
  const {
    code,
    requestId
  } = oldMainOrMpkData ?? {};

  const verifyMpkData = await dataVerifyMpk({
    accountId,
    verifyType,
    authCode: code || '',
    verifyUniqId: requestId || '',
    ext: JSON.stringify({
      codeType
    })
  });

  return {
    verifyType,
    verifyCode: verifyMpkData.ivToken || ''
  };
}