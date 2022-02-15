import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../const';
import {
  IMpkRiskInfo
} from '../../types';

import {
  ISlsCommonProps
} from './_type';

interface IProps extends Pick<IMpkRiskInfo, 'isMpk' | 'accountId' | 'useOldSendVerify'>, ISlsCommonProps{}

export default function slsMpkRisk(mpkRiskProps: IProps): void {
  sls(ESlsTopic.MPK_RISK, mpkRiskProps);
}