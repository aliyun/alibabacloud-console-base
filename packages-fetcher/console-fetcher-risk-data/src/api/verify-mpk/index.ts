import {
  FetcherError
} from '@alicloud/fetcher';

import {
  IPayloadVerifyMpk,
  TParamsVerifyMpk,
  TDataTokenVerify,
  IResponseTokenVerify
} from '../../types';
import {
  VERIFY_API,
  TICKET_TYPE,
  EAccountType,
  ESlsResultType
} from '../../const';
import {
  slsVerifyMpk
} from '../../sls';
import fetcher from '../../util/fetcher';
import transferTokenVerifyResponseToData from '../_util/transfer-token-verify-response-to-data';

export default async function dataVerifyMpk(params: TParamsVerifyMpk): Promise<TDataTokenVerify> {
  const {
    accountId, authCode, ext, verifyType, verifyUniqId
  } = params;

  const commonSlsParams = {
    authCode,
    verifyType,
    verifyUniqId
  };

  try {
    const verifyMpkResponse = await fetcher.post<IResponseTokenVerify, IPayloadVerifyMpk>(VERIFY_API, {
      Origin: 'console',
      TicketType: TICKET_TYPE,
      AccountType: EAccountType.MAIN,
      Ext: ext,
      AuthCode: authCode,
      AccountId: accountId,
      VerifyType: verifyType,
      VerifyUniqId: verifyUniqId
    });

    slsVerifyMpk({
      ...commonSlsParams,
      slsResultType: ESlsResultType.SUCCESS
    });

    return transferTokenVerifyResponseToData(verifyMpkResponse);
  } catch (error) {
    const {
      code,
      message,
      requestId
    } = error as FetcherError;

    slsVerifyMpk({
      ...commonSlsParams,
      requestId,
      errorCode: code,
      slsResultType: ESlsResultType.FAIL,
      errorMessage: message || 'FALLBACK_VERIFY_MPK_ERROR'
    });

    throw error;
  }
}