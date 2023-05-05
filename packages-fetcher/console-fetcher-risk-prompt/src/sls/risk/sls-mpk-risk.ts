import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../enum';
import {
  ISlsCommonPayload
} from '../../types';

interface IProps extends ISlsCommonPayload {
  type: string;
  mpkIsDowngrade: boolean;
}

export default function slsMpkRisk(props: IProps): void {
  sls(ESlsTopic.MPK_RISK, props);
}
