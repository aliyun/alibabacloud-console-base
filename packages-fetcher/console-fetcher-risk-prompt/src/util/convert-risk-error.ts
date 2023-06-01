import {
  IRiskPromptError,
  IPlainError
} from '../types';
import {
  ERROR_RISK_INVALID,
  ERROR_RISK_CANCELLED
} from '../const';
import {
  EUnexpectedErrorType
} from '../enum';

function convertToRiskError(err: IPlainError | undefined, name: string, unexpectedErrorType?: string): IRiskPromptError {
  const error = (err ?? new Error(name)) as IRiskPromptError;

  error.name = name;
  error.code = name; // name 当 code yes，不要惊慌
  
  // 非预期错误类型会作为 error 对象的一个属性
  if (unexpectedErrorType) {
    error.unexpectedErrorType = unexpectedErrorType;
  }
  
  return error;
}

export function convertToRiskErrorInvalid(err?: IPlainError): IRiskPromptError {
  // riskInvalid 也属于非预期错误
  return convertToRiskError(err, ERROR_RISK_INVALID, EUnexpectedErrorType.RISK_INVALID);
}

export function convertToRiskErrorCancelled(err?: IPlainError, unexpectedErrorType?: string): IRiskPromptError {
  return convertToRiskError(err, ERROR_RISK_CANCELLED, unexpectedErrorType);
}
