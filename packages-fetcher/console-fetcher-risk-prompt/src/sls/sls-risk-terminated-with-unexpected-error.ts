import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  EUnexpectedErrorType
} from '../enum';

interface IPayloadRiskTerminatedWithUnexpectedError {
  type: EUnexpectedErrorType;
  // type === EUnexpectedErrorType.RISK_INVALID 时存在，表示 stringify 之后的 riskResponse
  value?: string;
  errorCode?: string;
}

export default function slsRiskTerminatedWithUnexpectedError(payload: IPayloadRiskTerminatedWithUnexpectedError): void {
  sls(ESlsTopic.RISK_TERMINATED_WITH_UNEXPECTED_ERROR, payload, {
    instant: true
  });
}