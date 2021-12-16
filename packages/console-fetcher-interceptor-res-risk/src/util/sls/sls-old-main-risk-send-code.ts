import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESlsResultType
} from '../../const';

interface IProps {
  slsResultType: ESlsResultType;
  verifyType: string;
  codeType: string;
  sendCodeRequestId?: string;
  errorMessage?: string;
  errorCode?: string;
}

export default function slsOldMainRiskSendCode(oldMainRiskSendCodeProps: IProps): void {
  sls(ESlsTopic.OLD_MAIN_RISK_SEND_CODE, oldMainRiskSendCodeProps);
}