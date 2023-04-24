import sls from '@alicloud/console-base-log-sls';

import {
  ISlsCommonPayload
} from '../../types';
import {
  ESlsTopic
} from '../../enum';

interface IProps extends ISlsCommonPayload {
  type: string;
  mpkIsDowngrade: boolean;
}

export default function slsMpkRisk(props: IProps): void {
  sls(ESlsTopic.MPK_RISK, props);
}