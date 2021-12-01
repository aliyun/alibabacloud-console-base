import sls from '@alicloud/console-base-log-sls';

import {
  ERisk,
  ESlsTopic
} from '../../const';

interface IProps {
  riskType: ERisk;
}

export default function slsRiskStartUp({
  riskType
}: IProps): void {
  sls(ESlsTopic.RISK_STARTUP, {
    riskType
  }, {
    instant: true
  });
}