import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESlsResultType,
  ESubMFADeviceType
} from '../../const';
import {
  INewSubRiskValidators,
  TVerifyMfaPayload
} from '../../types';

interface IProps {
  slsResultType: ESlsResultType;
  validators: INewSubRiskValidators[];
  payload: TVerifyMfaPayload;
  errorMessage?: string;
}

export default function slsSubRiskBindMfa({
  slsResultType,
  validators,
  payload,
  ...restProps
}: IProps): void {
  sls(ESlsTopic.SUB_AUTH_MFA, {
    slsResultType,
    validators,
    accountId: payload?.AccountId,
    deviceType: 'AuthCode' in payload ? ESubMFADeviceType.VMFA : ESubMFADeviceType.U2F,
    ...restProps
  });
}