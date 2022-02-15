import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESubMFADeviceType
} from '../../const';
import {
  INewSubRiskValidators,
  TVerifyMfaPayload
} from '../../types';

import {
  ISlsCommonProps
} from './_type';

interface IProps extends ISlsCommonProps {
  validators: INewSubRiskValidators[];
  payload: TVerifyMfaPayload;
}

export default function slsSubRiskAuthMfa({
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