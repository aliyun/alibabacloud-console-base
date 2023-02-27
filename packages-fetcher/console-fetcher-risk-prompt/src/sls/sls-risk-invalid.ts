import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../enum';

interface IPayloadSlsRiskInvalid {
  stringifiedRiskResponse: string;
}

export default function slsRiskInvalid(payload: IPayloadSlsRiskInvalid): void {
  sls(ESlsTopic.RISK_INVALID, payload);
}