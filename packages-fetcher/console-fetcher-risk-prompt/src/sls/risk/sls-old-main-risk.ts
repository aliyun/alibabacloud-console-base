import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../enum';
import {
  ISlsCommonPayload
} from '../../types';

interface IProps extends ISlsCommonPayload {
  type: string;
  isMpkDowngrade?: boolean;
}

export default function slsOldMainRisk(props: IProps): void {
  sls(ESlsTopic.OLD_MAIN_RISK, props);
}
