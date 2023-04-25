import sls from '@alicloud/console-base-log-sls';

import {
  ISlsCommonPayload
} from '../../types';
import {
  ESlsTopic
} from '../../enum';

interface IProps extends ISlsCommonPayload {
  type: string;
  verifyUrl: string;
}

export default function slsNewMainRisk(props: IProps): void {
  sls(ESlsTopic.NEW_MAIN_RISK, props);
}