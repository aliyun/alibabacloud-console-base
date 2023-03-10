import * as React from 'react';

import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  TVerificationOrBindValidator
} from '../../../types';
import {
  ESceneKey
} from '../../../enum';
import U2fAuth from '../../u2f-auth-or-bind';
import MfaBind from '../mfa-bind';
import SubAccountAuth from '../sub-account-auth';

export default function getSubAuthValidatorsContent(data: TVerificationOrBindValidator): JSX.Element {
  if (data.deviceType === ESceneKey.BIND_MFA) {
    return <MfaBind />;
  }

  if (data.deviceType === ESubVerificationDeviceType.U2F) {
    return <U2fAuth type="u2f_auth" />;
  }

  return <SubAccountAuth deviceType={data.deviceType} />;
}