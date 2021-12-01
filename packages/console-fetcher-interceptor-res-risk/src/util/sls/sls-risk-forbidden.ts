import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../const';

export default function slsRiskForbidden(): void {
  sls(ESlsTopic.RISK_FORBIDDEN);
}