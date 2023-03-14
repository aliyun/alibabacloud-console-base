import sls from '@alicloud/console-base-log-sls';

import {
  ISlsCommonPayload
} from '../types';
import {
  ESlsTopic
} from '../enum';

interface IPayloadSlsGetVmfaCodeFromWindvane extends ISlsCommonPayload {}

export default function slsGetVmfaCodeFromWindvane(payload: IPayloadSlsGetVmfaCodeFromWindvane): void {
  sls(ESlsTopic.GET_VMFA_CODE_FROM_WINDVANE, payload, {
    instant: true
  });
}