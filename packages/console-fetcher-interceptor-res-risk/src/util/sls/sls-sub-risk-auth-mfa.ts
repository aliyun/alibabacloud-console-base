import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESubMfaDeviceType
} from '../../enum';
import {
  INewSubRiskValidators,
  TPayloadVerifyMfa
} from '../../types';

import {
  ISlsCommonProps
} from './_type';

interface IProps extends ISlsCommonProps {
  validators: INewSubRiskValidators[];
  payload?: TPayloadVerifyMfa;
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
    deviceType: payload && 'AuthCode' in payload ? ESubMfaDeviceType.VMFA : ESubMfaDeviceType.U2F,
    ...restProps
  });
}