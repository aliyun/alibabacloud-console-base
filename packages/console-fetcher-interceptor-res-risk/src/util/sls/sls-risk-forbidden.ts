import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../enum';

export default function slsRiskForbidden(): void {
  sls(ESlsTopic.RISK_FORBIDDEN);
}