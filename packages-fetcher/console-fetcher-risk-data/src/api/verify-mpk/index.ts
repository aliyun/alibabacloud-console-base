import type {
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
  const commonSlsParams = {
    authCode: params.authCode,
    verifyType: params.verifyType,
    riskRequestId: params.riskRequestId
  };

  try {
    const verifyMpkResponse = await fetcher.post<IResponseTokenVerify, IPayloadVerifyMpk>(VERIFY_API, {
      Origin: 'console',
      TicketType: TICKET_TYPE,
      AccountType: EAccountType.MAIN,
      Ext: params.ext,
      AuthCode: params.authCode,
      AccountId: params.accountId,
      VerifyType: params.verifyType,
      RiskRequestId: params.riskRequestId
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