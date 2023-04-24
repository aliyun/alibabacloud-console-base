import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../enum';

interface IPayloadSlsRiskInvalid {
  accountId?: string;
  errorMessage?: string;
}

export default function slsRiskPromptError(payload: IPayloadSlsRiskInvalid): void {
  sls(ESlsTopic.RISK_PROMPT_ERROR, payload);
}