import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  EUnexpectedErrorType
} from '../enum';

interface IPayloadRiskTerminatedWithUnexpectedError {
  type: EUnexpectedErrorType;
  // 1. value 在 type === EUnexpectedErrorType.RISK_INVALID 时存在，表示 stringify 之后的 riskResponse
  // 2. value 在 type === EUnexpectedErrorType.INVALID_VERIFY_URL 时存在，表示不合法的 VerifyUrl
  value?: string;
  errorCode?: string;
  errorMessage?: string;
}

export default function slsRiskTerminatedWithUnexpectedError(payload: IPayloadRiskTerminatedWithUnexpectedError): void {
  sls(ESlsTopic.RISK_TERMINATED_WITH_UNEXPECTED_ERROR, payload, {
    instant: true
  });
}