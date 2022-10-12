import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../enum';

export default function slsRiskInvalid(): void {
  sls(ESlsTopic.RISK_INVALID);
}