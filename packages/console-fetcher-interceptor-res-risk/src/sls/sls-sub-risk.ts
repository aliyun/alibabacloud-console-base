import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESlsResultType
} from '../enum';

interface IProps {
  slsResultType: ESlsResultType;
  accountId: string;
  errorCode?: string;
  errorMessage?: string;
}

export default function slsSubRisk(subRiskProps: IProps): void {
  sls(ESlsTopic.SUB_RISK, subRiskProps);
}