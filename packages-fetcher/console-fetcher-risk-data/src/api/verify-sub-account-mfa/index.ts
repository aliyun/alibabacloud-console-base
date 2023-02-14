import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  TParamsVerifySubAccount,
  TDataTokenVerify,
  TPayloadVerifySubAccount,
  IResponseTokenVerify
} from '../../types';
import {
  VERIFY_API,
  ESlsResultType
} from '../../const';
import {
  slsVerifySub
} from '../../sls';
import fetcher from '../../util/fetcher';
import transferTokenVerifyResponseToData from '../_util/transfer-token-verify-response-to-data';

import transferVerifySubAccountParamsToPayload from './transfer-verify-sub-account-params-to-payload';

export default async function dataVerifySubAccountMfa(params: TParamsVerifySubAccount): Promise<TDataTokenVerify> {
  try {
    const payload = transferVerifySubAccountParamsToPayload(params);
    const getBindMfaInfoResponse = await fetcher.post<IResponseTokenVerify, TPayloadVerifySubAccount>(VERIFY_API, payload);

    slsVerifySub({
      value: params.verifyType,
      type: params.verifyType,
      slsResultType: ESlsResultType.SUCCESS
    });

    return transferTokenVerifyResponseToData(getBindMfaInfoResponse);
  } catch (error) {
    const {
      code,
      message,
      requestId
    } = error as FetcherError;

    slsVerifySub({
      requestId,
      errorCode: code,
      value: params.verifyType,
      type: params.verifyType,
      slsResultType: ESlsResultType.FAIL,
      errorMessage: message || 'FALLBACK_VERIFY_SUB_ACCOUNT_ERROR'
    });

    throw error;
  }
}