import sls from '@alicloud/console-base-log-sls';

import {
  ISlsCommonPayload
} from '../../types';
import {
  ESlsTopic
} from '../../enum';

interface IProps extends ISlsCommonPayload {
  type: string;
}

export default function slsSubRisk(subRiskProps: IProps): void {
  sls(ESlsTopic.SUB_RISK, subRiskProps);
}