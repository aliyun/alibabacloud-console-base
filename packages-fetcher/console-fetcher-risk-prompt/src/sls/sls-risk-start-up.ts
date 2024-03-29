import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ERiskType
} from '../enum';

interface IPayloadSlsRiskStartUp {
  riskType: ERiskType;
}

export default function slsRiskStartUp(payload: IPayloadSlsRiskStartUp): void {
  sls(ESlsTopic.RISK_STARTUP, payload, {
    instant: true
  });
}