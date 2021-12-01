import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../const';

export default function slsRiskInvalid(): void {
  sls(ESlsTopic.RISK_INVALID);
}