import {
  ESubVerificationDeviceType,
  type DataVerificationValidator
} from '@alicloud/console-fetcher-risk-data';

import intl from '../../../intl';

export default function getSubAuthValidatorsTabs(data: DataVerificationValidator): string {
  switch (data.deviceType) {
    case ESubVerificationDeviceType.SMS:
      return intl('title:sms_auth');
    case ESubVerificationDeviceType.EMAIL:
      return intl('title:email_auth');
    case ESubVerificationDeviceType.VMFA:
      return intl('title:sub_vmfa_auth');
    case ESubVerificationDeviceType.U2F:
      return intl('title:sub_u2f_auth');
    default:
      return intl('title:default');
  }
}