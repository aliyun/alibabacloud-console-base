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
  ESlsResultType
} from '../../const';
import {
  slsVerifyMpk
} from '../../sls';
import fetcher from '../../util/fetcher';
import transferTokenVerifyResponseToData from '../_api_util/transfer-token-verify-response-to-data';

import transferVerifyMpkParamsToPayload from './transfer-verify-mpk-params-to-payload';

export default async function dataVerifyMpk(params: TParamsVerifyMpk): Promise<TDataTokenVerify> {
  const commonSlsParams = {
    authCode: params.authCode,
    verifyType: params.verifyType,
    riskRequestId: params.riskRequestId
  };

  try {
    const payload = transferVerifyMpkParamsToPayload(params);

    const verifyMpkResponse = await fetcher.post<IResponseTokenVerify, IPayloadVerifyMpk>(VERIFY_API, payload);

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