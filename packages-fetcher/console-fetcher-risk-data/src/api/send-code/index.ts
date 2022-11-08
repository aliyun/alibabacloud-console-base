import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  TParamsSendCode,
  IPayloadSendCode,
  IResponseSendCode
} from '../../types';
import {
  SEND_CODE_API,
  ESlsResultType
} from '../../const';
import {
  slsSendCode
} from '../../sls';
import fetcher from '../../util/fetcher';

import transferSendCodeParamsToPayload from './transfer-send-code-params-to-payload';

export default async function dataSendCode(params: TParamsSendCode): Promise<IResponseSendCode> {
  try {
    const payload = transferSendCodeParamsToPayload(params);

    // sendCodeResponse 对象中的首字母已是小写，因此不需要进行转化
    const sendCodeResponse = await fetcher.post<IResponseSendCode, IPayloadSendCode>(SEND_CODE_API, payload);

    slsSendCode({
      verifyType: params.verifyType,
      slsResultType: ESlsResultType.SUCCESS
    });

    return sendCodeResponse;
  } catch (error) {
    const {
      code,
      message,
      requestId
    } = error as FetcherError;

    slsSendCode({
      requestId,
      errorCode: code,
      verifyType: params.verifyType,
      slsResultType: ESlsResultType.FAIL,
      errorMessage: message || 'FALLBACK_SEND_CODE_ERROR'
    });

    throw error;
  }
}