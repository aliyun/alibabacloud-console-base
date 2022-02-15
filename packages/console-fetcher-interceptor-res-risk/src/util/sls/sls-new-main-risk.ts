import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../const';
import {
  IMainAccountRiskInfo
} from '../../types';

import {
  ISlsCommonProps
} from './_type';

interface IProps extends Omit<IMainAccountRiskInfo, 'risk'>, ISlsCommonProps {}

export default function slsNewMainRisk(mainRiskProps: IProps): void {
  sls(ESlsTopic.NEW_MAIN_RISK, mainRiskProps);
}