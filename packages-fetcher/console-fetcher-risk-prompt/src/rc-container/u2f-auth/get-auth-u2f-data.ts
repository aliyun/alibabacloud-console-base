import {
  DataGetU2fInfoToAuth,
  DataGetU2fWebAuthnInfoToAuth
} from '@alicloud/console-fetcher-risk-data';

import {
  TSubGetVerificationToAuthData
} from '../../types';
import {
  ESubVerificationDeviceType
} from '../../enum';

export default function getAuthU2fData(subGetVerificationToAuthData?: TSubGetVerificationToAuthData): DataGetU2fInfoToAuth | DataGetU2fWebAuthnInfoToAuth | null {
  if (subGetVerificationToAuthData) {
    const foundU2fData = subGetVerificationToAuthData.subValidators.find(o => o.deviceType === ESubVerificationDeviceType.U2F);

    if (!foundU2fData) {
      return null;
    }

    return foundU2fData as DataGetU2fInfoToAuth | DataGetU2fWebAuthnInfoToAuth;
  }

  return null;
}