import fetcher, {
  FetcherError
} from '@alicloud/console-fetcher-basic';

import {
  IParamsSendCodeOld,
  IParamsSendCodeOldWithConfig,
  IResponseSendCode
} from '../../types';
import {
  ESlsResultType
} from '../../const';
import {
  slsSendCodeOld
} from '../../sls';

export default async function dataSendCodeOld(params: IParamsSendCodeOldWithConfig): Promise<IResponseSendCode> {
  const {
    sendCodeUrl,
    sendCodeMethod,
    ...sendCodeParams
  } = params;
  
  try {
    let sendCodeOldResponse: IResponseSendCode;
    
    // 支持业务方自定义自定义请求参数以及发送验证码的 URL
    if (sendCodeMethod === 'GET') {
      sendCodeOldResponse = await fetcher.get<IResponseSendCode, IParamsSendCodeOld>(sendCodeUrl, sendCodeParams);
    } else {
      sendCodeOldResponse = await fetcher.post<IResponseSendCode, IParamsSendCodeOld>(sendCodeUrl, sendCodeParams);
    }
    
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
