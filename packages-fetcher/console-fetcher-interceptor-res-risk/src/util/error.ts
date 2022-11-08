import type {
  FetcherError
} from '@alicloud/fetcher';
import {
  ERROR_RISK_FORBIDDEN
} from '@alicloud/console-fetcher-risk-prompt';

function convertToRiskError(err: FetcherError, name: string): FetcherError {
  err.name = name;
  err.code = name; // name 当 code yes，不要惊慌
  
  return err;
}

export function convertToRiskErrorForbidden(err: FetcherError): FetcherError {
  return convertToRiskError(err, ERROR_RISK_FORBIDDEN);
}
