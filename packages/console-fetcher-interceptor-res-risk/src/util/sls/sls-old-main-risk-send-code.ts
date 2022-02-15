import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../const';

import {
  ISlsCommonProps
} from './_type';

interface IProps extends ISlsCommonProps {
  verifyType: string;
  codeType: string;
  sendCodeRequestId?: string;
}

export default function slsOldMainRiskSendCode(oldMainRiskSendCodeProps: IProps): void {
  sls(ESlsTopic.OLD_MAIN_RISK_SEND_CODE, oldMainRiskSendCodeProps);
}