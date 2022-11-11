import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  TParamsSendCode,
  IPayloadSendCode,
  IResponseSendCode
} from '../../types';
import {
  TICKET_TYPE,
  SEND_CODE_API,
  ESlsResultType
} from '../../const';
import {
  slsSendCode
} from '../../sls';
import fetcher from '../../util/fetcher';

export default async function dataSendCode(params: TParamsSendCode): Promise<IResponseSendCode> {
  try {
    // sendCodeResponse 对象中的首字母已是小写，因此不需要进行转化
    const sendCodeResponse = await fetcher.post<IResponseSendCode, IPayloadSendCode>(SEND_CODE_API, {
      Origin: 'console',
      TicketType: TICKET_TYPE,
      Ext: params.ext,
      AccountId: params.accountId,
      VerifyType: params.verifyType,
      AccountType: params.accountType
    });

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