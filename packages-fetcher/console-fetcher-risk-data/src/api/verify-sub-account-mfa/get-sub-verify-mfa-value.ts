import {
  TParamsVerifySubAccountMfa
} from '../../types';
import {
  ESubVerifyType,
  ESubMfaDeviceType
} from '../../const';

interface ISubVerifyMfaValue {
  value?: ESubMfaDeviceType | string;
}

export default function getSubVerifyMfaValue(params: TParamsVerifySubAccountMfa): ISubVerifyMfaValue {
  if (params.verifyType !== ESubVerifyType.MFA) {
    return {};
  }

  if ('authCode' in params) {
    return {
      value: ESubMfaDeviceType.VMFA
    };
  }

  return {
    value: ESubMfaDeviceType.U2F
  };
}