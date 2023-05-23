import {
  FetcherError
} from '@alicloud/fetcher';

import {
  TDataGetMfaInfoToBind,
  TParamsGetMfaInfoToBind,
  TPayloadGetBindMfaInfo,
  IResponseGetMfaInfoToBind
} from '../../types';
import {
  ESlsResultType,
  GET_MFA_INFO_TO_BIND_API
} from '../../const';
import {
  slsGetBindMfaInfo
} from '../../sls';
import fetcher from '../../util/fetcher';

import transferGetMfaInfoToBindResponseToData from './transfer-get-mfa-info-to-bind-response-to-data';
import transferGetMfaInfoToBindParamsToPayload from './transfer-get-mfa-info-to-bind-params-to-payload';

export default async function dataGetMfaInfoToBind(params: TParamsGetMfaInfoToBind): Promise<TDataGetMfaInfoToBind> {
  try {
    const payload = transferGetMfaInfoToBindParamsToPayload(params);

    const getBindMfaInfoResponse = await fetcher.post<IResponseGetMfaInfoToBind, TPayloadGetBindMfaInfo>(GET_MFA_INFO_TO_BIND_API, payload);

    slsGetBindMfaInfo({
      value: params.deviceType,
      slsResultType: ESlsResultType.SUCCESS
    });

    return transferGetMfaInfoToBindResponseToData(getBindMfaInfoResponse);
  } catch (error) {
    const {
      code,
      message,
      requestId
    } = error as FetcherError;

    slsGetBindMfaInfo({
      requestId,
      errorCode: code,
      value: params.deviceType,
      slsResultType: ESlsResultType.FAIL,
      errorMessage: message || 'FALLBACK_GET_MFA_INFO_TO_BIND_ERROR'
    });

    throw error;
  }
}