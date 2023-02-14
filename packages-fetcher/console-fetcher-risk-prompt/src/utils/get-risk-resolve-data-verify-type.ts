import {
  ESubVerificationDeviceType,
  type ParamsVerifySubAccount
} from '@alicloud/console-fetcher-risk-data';

export function convertToResolveDataVerifyType(verifySubAccountParams?: ParamsVerifySubAccount): 'ga' | 'sms' | 'email' | '' {
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