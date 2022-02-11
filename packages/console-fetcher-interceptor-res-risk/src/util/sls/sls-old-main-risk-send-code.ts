import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../const';

import {
  ISlsCommon
} from './_type';

interface IProps extends ISlsCommon {
  verifyType: string;
  codeType: string;
  sendCodeRequestId?: string;
}

export default function slsOldMainRiskSendCode(oldMainRiskSendCodeProps: IProps): void {
  sls(ESlsTopic.OLD_MAIN_RISK_SEND_CODE, oldMainRiskSendCodeProps);
}