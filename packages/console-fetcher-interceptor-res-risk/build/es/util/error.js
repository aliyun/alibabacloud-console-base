import { ERROR_RISK_FORBIDDEN, ERROR_RISK_INVALID, ERROR_RISK_CANCELLED } from '../const';

function convertToRiskError(err, name) {
  err.name = name;
  err.code = name; // name 当 code yes，不要惊慌

  return err;
}

export function convertToRiskErrorForbidden(err) {
  return convertToRiskError(err, ERROR_RISK_FORBIDDEN);
}
export function convertToRiskErrorInvalid(err) {
  return convertToRiskError(err, ERROR_RISK_INVALID);
}
export function convertToRiskErrorCancelled(err) {
  return convertToRiskError(err, ERROR_RISK_CANCELLED);
}