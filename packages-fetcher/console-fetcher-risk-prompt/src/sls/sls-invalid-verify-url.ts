import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../enum';

interface IPayloadSlsInvalidVerifyUrl {
  verifyUrl?: string;
}

export default function slsRiskInvalidVerifyUrl(payload: IPayloadSlsInvalidVerifyUrl): void {
  sls(ESlsTopic.INVALID_VERIFY_URL, payload, {
    instant: true
  });
}