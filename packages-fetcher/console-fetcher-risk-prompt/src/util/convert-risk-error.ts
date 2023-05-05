import {
  IRiskError,
  IPlainError
} from '../types';
import {
  ERROR_RISK_INVALID,
  ERROR_RISK_CANCELLED
} from '../const';

function convertToRiskError(err: IPlainError | undefined, name: string): IRiskError {
  const error = (err ?? new Error(name)) as IRiskError;

  error.name = name;
  error.code = name; // name 当 code yes，不要惊慌
  
  return error;
}

export function convertToRiskErrorInvalid(err?: IPlainError): IRiskError {
  return convertToRiskError(err, ERROR_RISK_INVALID);
}

export function convertToRiskErrorCancelled(err?: IPlainError): IRiskError {
  return convertToRiskError(err, ERROR_RISK_CANCELLED);
}
