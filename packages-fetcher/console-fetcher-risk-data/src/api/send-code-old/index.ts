import fetcher, {
  FetcherError
} from '@alicloud/console-fetcher-basic';

import {
  IParamsSendCodeOld,
  IResponseSendCode
} from '../../types';
import {
  ESlsResultType,
  SEND_CODE_OLD_API
} from '../../const';
import {
  slsSendCodeOld
} from '../../sls';

export default async function dataSendCodeOld(params: IParamsSendCodeOld): Promise<IResponseSendCode> {
  try {
    const sendCodeOldResponse = await fetcher.post<IResponseSendCode, IParamsSendCodeOld>(SEND_CODE_OLD_API, params);

    slsSendCodeOld({
      ...params,
      slsResultType: ESlsResultType.SUCCESS
    });

    return sendCodeOldResponse;
  } catch (error) {
    const {
      code,
      message,
      requestId
    } = error as FetcherError;

    slsSendCodeOld({
      ...params,
      requestId,
      errorCode: code,
      slsResultType: ESlsResultType.FAIL,
      errorMessage: message || 'FALLBACK_SEND_CODE_OLD_ERROR'
    });

    throw error;
  }
}
