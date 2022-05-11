import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESubMfaDeviceType
} from '../../enum';
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
    deviceType: 'AuthCode' in payload ? ESubMfaDeviceType.VMFA : ESubMfaDeviceType.U2F,
    ...restProps
  });
}