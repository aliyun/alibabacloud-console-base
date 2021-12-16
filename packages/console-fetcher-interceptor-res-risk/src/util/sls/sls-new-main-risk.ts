import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESlsResultType
} from '../../const';
import {
  IMainAccountRiskInfo
} from '../../types';

interface IProps extends Omit<IMainAccountRiskInfo, 'risk'> {
  slsResultType: ESlsResultType;
  errorMessage?: string;
  errorCode?: string;
}

export default function slsNewMainRisk(mainRiskProps: IProps): void {
  sls(ESlsTopic.NEW_MAIN_RISK, mainRiskProps);
}