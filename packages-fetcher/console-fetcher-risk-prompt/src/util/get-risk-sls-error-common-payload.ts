import {
  FetcherError
} from '@alicloud/fetcher';

import {
  ESlsResultType
} from '../enum';
import {
  ISlsCommonPayload
} from '../types';
import {
  CODE_RISK_ERROR_ARRAY,
  CODE_IDENTITY_INTERNAL_ERROR
} from '../const';

export default function getRiskSlsErrorCommonPayload(error: FetcherError): ISlsCommonPayload {
  const {
    code, message
  } = error;

  // 如果是风控验证错误或者是 InternalError，那么 slsResultType 是 fail
  if (code && [...CODE_RISK_ERROR_ARRAY, CODE_IDENTITY_INTERNAL_ERROR].includes(code)) {
    return {
      errorCode: code,
      errorMessage: message,
      slsResultType: ESlsResultType.FAIL
    };
  }

  // 否则可以视作风控验证成功后，业务抛出的错误
  return {
    errorCode: code,
    errorMessage: message,
    slsResultType: ESlsResultType.BIZ_API_ERROR
  };
}
