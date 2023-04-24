import {
  ESubVerificationDeviceType,
  type ParamsVerifySubAccount
} from '@alicloud/console-fetcher-risk-data';

import {
  TResolveVerifyType
} from '../types';

// 将 ESubVerificationDeviceType 转化为 TResolveVerifyType
export function convertToResolveDataVerifyType(verifySubAccountParams?: ParamsVerifySubAccount): TResolveVerifyType {
  switch (verifySubAccountParams?.verifyType) {
    case ESubVerificationDeviceType.EMAIL:
      return 'email';
    case ESubVerificationDeviceType.SMS:
      return 'sms';
    case ESubVerificationDeviceType.U2F:
    case ESubVerificationDeviceType.VMFA:
      return 'ga';
    default:
      return '';
  }
}

// 将 TResolveVerifyType 转化为 ESubVerificationDeviceType
export function convertToMpkVerificationDeviceType(verifyType: string): ESubVerificationDeviceType.EMAIL | ESubVerificationDeviceType.SMS | ESubVerificationDeviceType.VMFA {
  switch (verifyType) {
    case 'email':
      return ESubVerificationDeviceType.EMAIL;
    case 'sms':
      return ESubVerificationDeviceType.SMS;
    default:
      return ESubVerificationDeviceType.VMFA;
  }
}