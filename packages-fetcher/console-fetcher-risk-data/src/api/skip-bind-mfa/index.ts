import {
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
  SKIP_BIND_MFA_API,
  SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD
} from '../../const';
import {
  slsSkipBindMfa
} from '../../sls';
import fetcher from '../../util/fetcher';
import transferTokenVerifyResponseToData from '../_util/transfer-token-verify-response-to-data';

export default async function dataSkipBindMfa(params: TParamsSkipBindMfa): Promise<TDataTokenVerify> {
  try {
    const bindMfaResponse = await fetcher.post<IResponseTokenVerify, IPayloadSkipBindMfa>(SKIP_BIND_MFA_API, {
      ...SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD,
      Ext: params.ext,
      AccountId: params.accountId
    });

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