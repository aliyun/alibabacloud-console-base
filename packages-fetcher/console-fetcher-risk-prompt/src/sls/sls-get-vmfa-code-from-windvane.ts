import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../enum';
import {
  ISlsCommonPayload
} from '../types';

interface IPayloadSlsGetVmfaCodeFromWindvane extends ISlsCommonPayload {}

export default function slsGetVmfaCodeFromWindvane(payload: IPayloadSlsGetVmfaCodeFromWindvane): void {
  sls(ESlsTopic.GET_VMFA_CODE_FROM_WINDVANE, payload, {
    instant: true
  });
}
