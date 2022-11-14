import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../const';

interface IPayloadSlsRiskInvalid {
  verifyType: string;
  verifyDetail: string | boolean;
}

export default function slsRiskInvalid(payload: IPayloadSlsRiskInvalid): void {
  sls(ESlsTopic.RISK_INVALID, payload);
}