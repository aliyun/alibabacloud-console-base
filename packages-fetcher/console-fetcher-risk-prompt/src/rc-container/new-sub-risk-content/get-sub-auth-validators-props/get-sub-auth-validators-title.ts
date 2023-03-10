import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  TVerificationOrBindValidator
} from '../../../types';
import {
  ESceneKey
} from '../../../enum';
import intl from '../../../intl';

export default function getSubAuthValidatorsTabs(data: TVerificationOrBindValidator): string {
  switch (data.deviceType) {
    case ESceneKey.BIND_MFA:
      return intl('title:sub:mfa:bind');
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