import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  TDataGetMfaInfoToAuth,
  TParamsGetMfaInfoToAuth,
  IPayloadGetMfaInfoToAuth,
  TResponseGetMfaInfoToAuth
} from '../../types';
import {
  TICKET_TYPE,
  ESlsResultType,
  GET_MFA_INFO_TO_AUTH_API
} from '../../const';
import {
  slsGetMfaInfoToAuth
} from '../../sls';
import fetcher from '../../util/fetcher';

import transferGetMfaInfoToAuthResponseToData from './transfer-get-mfa-info-to-auth-response-to-data';

export default async function dataGetMfaInfoToAuth(params: TParamsGetMfaInfoToAuth): Promise<TDataGetMfaInfoToAuth> {
  try {
    const getAuthMfaInfoResponse = await fetcher.post<TResponseGetMfaInfoToAuth, IPayloadGetMfaInfoToAuth>(GET_MFA_INFO_TO_AUTH_API, {
      TicketType: TICKET_TYPE,
      AccountId: params.accountId
    });

    slsGetMfaInfoToAuth({
      value: getAuthMfaInfoResponse.DeviceType,
      slsResultType: ESlsResultType.SUCCESS
    });

    return transferGetMfaInfoToAuthResponseToData(getAuthMfaInfoResponse);
  } catch (error) {
    const {
      code,
      message,
      requestId
    } = error as FetcherError;

    slsGetMfaInfoToAuth({
      requestId,
      errorCode: code,
      slsResultType: ESlsResultType.FAIL,
      errorMessage: message || 'FALLBACK_GET_MFA_INFO_TO_AUTH_ERROR'
    });

    throw error;
  }
}