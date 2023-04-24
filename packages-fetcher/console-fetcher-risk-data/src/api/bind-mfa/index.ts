import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  TParamsBindMfa,
  TPayloadBindMfa,
  TDataTokenVerify,
  IResponseTokenVerify
} from '../../types';
import {
  BIND_MFA_API,
  ESlsResultType
} from '../../const';
import {
  slsBindMfa
} from '../../sls';
import fetcher from '../../util/fetcher';
import transferTokenVerifyResponseToData from '../_util/transfer-token-verify-response-to-data';

import transferBindMfaParamsToPayload from './transfer-bind-mfa-prams-to-payload';

export default async function dataBindMfa(params: TParamsBindMfa): Promise<TDataTokenVerify> {
  try {
    const payload = transferBindMfaParamsToPayload(params);

    const bindMfaResponse = await fetcher.post<IResponseTokenVerify, TPayloadBindMfa>(BIND_MFA_API, payload);

    slsBindMfa({
      value: params.deviceType,
      slsResultType: ESlsResultType.SUCCESS
    });

    return transferTokenVerifyResponseToData(bindMfaResponse);
  } catch (error) {
    const {
      code,
      message,
      requestId
    } = error as FetcherError;

    slsBindMfa({
      requestId,
      errorCode: code,
      value: params.deviceType,
      slsResultType: ESlsResultType.FAIL,
      errorMessage: message || 'FALLBACK_BIND_MFA_ERROR'
    });

    // 此处 catch 的作用是为了上报接口错误埋点，error 需要继续抛出
    throw error;
  }
}