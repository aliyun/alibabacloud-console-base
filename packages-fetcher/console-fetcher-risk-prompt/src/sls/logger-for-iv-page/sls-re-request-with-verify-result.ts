import {
  ESlsResultType
} from '../../enum';

import logger from './logger';

interface IProps {
  isMpk?: boolean;
  accountType?: string;
  errorMessage?: string;
  errorCode?: string;
  requestId?: string;
  apiResponseType: ESlsResultType;
}

export function slsReRequestWithVerifyResult(p: IProps): void {
  logger('re_request_with_verify_result', p);
}