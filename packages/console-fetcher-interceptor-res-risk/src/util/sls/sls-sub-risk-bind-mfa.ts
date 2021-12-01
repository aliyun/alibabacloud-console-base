import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESlsResultType
} from '../../const';
import {
  INewSubRiskValidators,
  TBindMfaPayload
} from '../../types';

interface IProps {
  slsResultType: ESlsResultType;
  validators: INewSubRiskValidators[];
  payload: TBindMfaPayload;
  errorMessage?: string;
}

export default function slsSubRiskBindMfa({
  slsResultType,
  validators,
  payload,
  ...restProps
}: IProps): void {
  sls(ESlsTopic.SUB_BIND_MFA, {
    slsResultType,
    validators,
    accountId: payload?.AccountId,
    deviceType: payload?.DeviceType,
    ...restProps
  });
}