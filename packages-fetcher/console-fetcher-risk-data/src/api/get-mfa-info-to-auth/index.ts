import {
  FetcherError
} from '@alicloud/fetcher';

import {
  TDataGetMfaInfoToAuth,
  TParamsGetMfaInfoToAuth,
  IPayloadGetMfaInfoToAuth,
  TResponseGetMfaInfoToAuth
} from '../../types';
import {
  ESlsResultType,
  GET_MFA_INFO_TO_AUTH_API,
  SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD
} from '../../const';
import {
  slsGetAuthMfaInfo
} from '../../sls';
import fetcher from '../../util/fetcher';

import transferGetMfaInfoToAuthResponseToData from './transfer-get-mfa-info-to-auth-response-to-data';

export default async function dataGetMfaInfoToAuth(params: TParamsGetMfaInfoToAuth): Promise<TDataGetMfaInfoToAuth> {
  try {
    const getAuthMfaInfoResponse = await fetcher.post<TResponseGetMfaInfoToAuth, IPayloadGetMfaInfoToAuth>(GET_MFA_INFO_TO_AUTH_API, {
      ...SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD,
      AccountId: params.accountId
    });

    slsGetAuthMfaInfo({
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

    slsGetAuthMfaInfo({
      requestId,
      errorCode: code,
      slsResultType: ESlsResultType.FAIL,
      errorMessage: message || 'FALLBACK_GET_MFA_INFO_TO_AUTH_ERROR'
    });

    throw error;
  }
}