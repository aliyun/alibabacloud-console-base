import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  TParamsVerifySubAccountMfa,
  TDataTokenVerify,
  TPayloadVerifySubAccountMfa,
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

import getSubVerifyMfaValue from './get-sub-verify-mfa-value';
import transferVerifySubAccountParamsToPayload from './transfer-verify-sub-account-params-to-payload';

export default async function dataVerifySubAccountMfa(params: TParamsVerifySubAccountMfa): Promise<TDataTokenVerify> {
  const subVerifyMfaValue = getSubVerifyMfaValue(params);

  try {
    const payload = transferVerifySubAccountParamsToPayload(params);
    const getBindMfaInfoResponse = await fetcher.post<IResponseTokenVerify, TPayloadVerifySubAccountMfa>(VERIFY_API, payload);

    slsVerifySub({
      ...subVerifyMfaValue,
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
      ...subVerifyMfaValue,
      requestId,
      errorCode: code,
      type: params.verifyType,
      slsResultType: ESlsResultType.FAIL,
      errorMessage: message || 'FALLBACK_VERIFY_SUB_ACCOUNT_ERROR'
    });

    throw error;
  }
}