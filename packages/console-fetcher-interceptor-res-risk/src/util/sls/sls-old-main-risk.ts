import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESlsResultType
} from '../../const';
import {
  IOldMainRiskInfo
} from '../../types';

interface IProps extends Omit<IOldMainRiskInfo, 'risk' | 'type'>{
  slsResultType: ESlsResultType;
  sendCodeRequestId: string;
  verifyCode: string;
  errorMessage?: string;
  errorCode?: string;
}

export default function slsOldMainRisk(oldMainRiskProps: IProps): void {
  sls(ESlsTopic.OLD_MAIN_RISK, oldMainRiskProps);
}