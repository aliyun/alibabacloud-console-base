import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../const';
import {
  IOldMainRiskInfo
} from '../../types';

import {
  ISlsCommonProps
} from './_type';

interface IProps extends Pick<IOldMainRiskInfo, 'verifyType' | 'detail' | 'codeType'>, ISlsCommonProps {
  verifyCode: string;
  sendCodeRequestId: string;
}

export default function slsOldMainRisk(oldMainRiskProps: IProps): void {
  sls(ESlsTopic.OLD_MAIN_RISK, oldMainRiskProps);
}