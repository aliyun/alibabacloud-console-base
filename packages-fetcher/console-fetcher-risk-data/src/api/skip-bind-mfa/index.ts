import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  TParamsSkipBindMfa,
  IPayloadSkipBindMfa,
  TDataTokenVerify,
  IResponseTokenVerify
} from '../../types';
import {
  ESlsResultType,
  SKIP_BIND_MFA_API
} from '../../const';
import {
  slsSkipBindMfa
} from '../../sls';
import fetcher from '../../util/fetcher';
import transferTokenVerifyResponseToData from '../_api_util/transfer-token-verify-response-to-data';

import transferSkipBindMfaParamsToPayload from './transfer-skip-bind-mfa-params-to-payload';

export default async function dataSkipBindMfa(params: TParamsSkipBindMfa): Promise<TDataTokenVerify> {
  try {
    const payload = transferSkipBindMfaParamsToPayload(params);

    const bindMfaResponse = await fetcher.post<IResponseTokenVerify, IPayloadSkipBindMfa>(SKIP_BIND_MFA_API, payload);

    slsSkipBindMfa({
      slsResultType: ESlsResultType.SUCCESS
    });

    return transferTokenVerifyResponseToData(bindMfaResponse);
  } catch (error) {
    const {
      code,
      message,
      requestId
    } = error as FetcherError;

    slsSkipBindMfa({
      requestId,
      errorCode: code,
      slsResultType: ESlsResultType.FAIL,
      errorMessage: message || 'FALLBACK_SKIP_BIND_MFA_ERROR'
    });

    throw error;
  }
}