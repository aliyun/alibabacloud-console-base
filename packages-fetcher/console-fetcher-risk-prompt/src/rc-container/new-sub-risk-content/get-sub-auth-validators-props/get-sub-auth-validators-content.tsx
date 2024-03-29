import * as React from 'react';

import {
  ESubVerificationDeviceType,
  type DataVerificationValidator
} from '@alicloud/console-fetcher-risk-data';

import U2fAuth from '../../u2f-auth';
import SubAccountAuth from '../sub-account-auth';

export default function getSubAuthValidatorsContent(data: DataVerificationValidator): JSX.Element {
  if (data.deviceType === ESubVerificationDeviceType.U2F) {
    return <U2fAuth />;
  }

  return <SubAccountAuth deviceType={data.deviceType} />;
}