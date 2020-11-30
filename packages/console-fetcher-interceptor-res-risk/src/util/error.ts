import {
  FetcherError
} from '@alicloud/fetcher';

import {
  ERROR_RISK_FORBIDDEN,
  ERROR_RISK_INVALID,
  ERROR_RISK_CANCELLED
} from '../const';

function convertToRiskError(err: FetcherError, name: string): FetcherError {
  err.name = name;
  err.code = name; // name 当 code yes，不要惊慌
  
  return err;
}

export function convertToRiskErrorForbidden(err: FetcherError): FetcherError {
  return convertToRiskError(err, ERROR_RISK_FORBIDDEN);
}

export function convertToRiskErrorInvalid(err: FetcherError): FetcherError {
  return convertToRiskError(err, ERROR_RISK_INVALID);
}

export function convertToRiskErrorCancelled(err: FetcherError): FetcherError {
  return convertToRiskError(err, ERROR_RISK_CANCELLED);
}
