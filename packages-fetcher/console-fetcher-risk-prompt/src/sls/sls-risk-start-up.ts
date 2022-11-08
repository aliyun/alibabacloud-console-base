import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ERiskType
} from '../const';

interface ISlsProps {
  riskType: ERiskType;
}

export default function slsRiskStartUp({
  riskType
}: ISlsProps): void {
  sls(ESlsTopic.RISK_STARTUP, {
    riskType
  }, {
    instant: true
  });
}