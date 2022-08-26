import {
  FetcherFnRequest
} from '@alicloud/fetcher';

import {
  TGetAuthMfaInfoData,
  IFetcherInterceptorConfig
} from '../types';
import {
  TICKET_TYPE
} from '../const';

interface IProps {
  request: FetcherFnRequest;
  accountId: string;
  getMfaInfoToAuthUrl: IFetcherInterceptorConfig['URL_GET_MFA_INFO_TO_AUTH'];
  requestMethod?: IFetcherInterceptorConfig['REQUEST_METHOD'];
}

export default async function getAuthMfaInfo({
  request,
  accountId,
  getMfaInfoToAuthUrl,
  requestMethod
}: IProps): Promise<TGetAuthMfaInfoData> {
  const authMfaInfo = await request<TGetAuthMfaInfoData>({
    method: requestMethod,
    headers: {
      'Content-Type': 'application/json'
    },
    url: getMfaInfoToAuthUrl,
    body: {
      AccountId: accountId,
      TicketType: TICKET_TYPE
    }
  });

  return authMfaInfo;
}