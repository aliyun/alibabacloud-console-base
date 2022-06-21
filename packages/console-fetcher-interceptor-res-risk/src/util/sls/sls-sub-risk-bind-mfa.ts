import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../enum';
import {
  INewSubRiskValidators,
  TBindMfaPayload
} from '../../types';

import {
  ISlsCommonProps
} from './_type';

interface IProps extends ISlsCommonProps {
  validators: INewSubRiskValidators[];
  payload?: TBindMfaPayload;
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