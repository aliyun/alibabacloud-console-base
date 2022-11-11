import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../const';

interface IPayloadSlsGetVmfaCodeFromWindvane {
  slsResultType: 'success' | 'failure';
  errorCode?: string;
  errorMessage?: string;
}

export default function slsGetVmfaCodeFromWindvane(payload: IPayloadSlsGetVmfaCodeFromWindvane): void {
  sls(ESlsTopic.GET_VMFA_CODE_FROM_WINDVANE, payload, {
    instant: true
  });
}