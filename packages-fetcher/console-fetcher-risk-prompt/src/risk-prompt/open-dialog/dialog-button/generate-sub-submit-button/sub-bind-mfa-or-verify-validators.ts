import {
  dataBindMfa,
  dataVerifySubAccountMfa,
  ESubVerificationDeviceType,
  type DataTokenVerify,
  type ParamsBindMfa
} from '@alicloud/console-fetcher-risk-data';

import {
  TSubIdentityServiceParams
} from '../../../../types';
import {
  ESubIdentityServiceType
} from '../../../../enum';

interface IProps {
  subBindMfaParams?: ParamsBindMfa;
  subIdentityServiceParams?: TSubIdentityServiceParams;
  subVerificationDeviceType?: ESubVerificationDeviceType | 'bind_mfa';
  onParamsVerifySuccess: () => void;
}

export default async function subBindOrVerifyValidators({
  subBindMfaParams,
  subIdentityServiceParams,
  subVerificationDeviceType,
  onParamsVerifySuccess
}: IProps): Promise<DataTokenVerify | null> {
  if (subIdentityServiceParams?.paramsType === ESubIdentityServiceType.VERIFY_SUB_ACCOUNT) {
    const currentVerifiCationParams = subIdentityServiceParams.params.find(o => o.verifyType === subVerificationDeviceType);

    if (currentVerifiCationParams) {
      onParamsVerifySuccess();

      return dataVerifySubAccountMfa(currentVerifiCationParams);
    }
  }

  if (subBindMfaParams) {
    return dataBindMfa(subBindMfaParams);
  }

  return null;
}