import {
  FetcherError
} from '@alicloud/fetcher';

import {
  IPayloadGetVerificationInfoToAuth,
  IResponseGetVerificationInfoToAuth,
  TParamsGetVerificationInfoToAuth,
  TDataGetVerificationInfoToAuth
} from '../../types';
import {
  ESlsResultType,
  GET_VERIFICATION_INFO_TO_AUTH,
  SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD
} from '../../const';
import fetcher from '../../util/fetcher';
import {
  slsGetVerificationInfo
} from '../../sls';

import transferGetVerificationInfoToAuthResponseToData from './transfer-get-verification-info-to-auth-response-to-data';

export default async function getVerificationInfoToAuth(params: TParamsGetVerificationInfoToAuth): Promise<TDataGetVerificationInfoToAuth> {
  try {
    const verificationInfoResponse = await fetcher.post<IResponseGetVerificationInfoToAuth, IPayloadGetVerificationInfoToAuth>(GET_VERIFICATION_INFO_TO_AUTH, {
      ...SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD,
      AccountId: params.accountId
    });
    
    const parsedData = transferGetVerificationInfoToAuthResponseToData(verificationInfoResponse);
    const deviceList = parsedData.map(o => o.deviceType);
    
    slsGetVerificationInfo({
      deviceCount: deviceList.length,
      deviceList: deviceList.join(','),
      firstChoiceDevice: deviceList[0],
      slsResultType: ESlsResultType.SUCCESS
    });
    
    return parsedData;
  } catch (error) {
    const {
      code, message, requestId
    } = error as FetcherError;
    
    slsGetVerificationInfo({
      requestId,
      errorCode: code,
      errorMessage: message,
      slsResultType: ESlsResultType.FAIL
    });
    
    throw error;
  }
}
