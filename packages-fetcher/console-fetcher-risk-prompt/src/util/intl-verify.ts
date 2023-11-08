import {
  EDialogType,
  EConvertedVerifyType,
  ESubVerificationDeviceType
} from '../enum';
import intl from '../intl';

interface IIntlVerifyDialogTitleProps {
  dialogType?: EDialogType;
  currentSubVerificationDeviceType?: ESubVerificationDeviceType;
}

export function intlVerifyTitle(type?: EConvertedVerifyType | ESubVerificationDeviceType): string {
  switch (type) {
    case EConvertedVerifyType.SMS:
    case ESubVerificationDeviceType.SMS:
      return intl('op:verify_by_phone');
    case EConvertedVerifyType.EMAIL:
    case ESubVerificationDeviceType.EMAIL:
      return intl('op:verify_by_email');
    default: // MFA
      return intl('op:verify_by_mfa');
  }
}

export function intlVerifyLabel(type?: EConvertedVerifyType | ESubVerificationDeviceType): string {
  switch (type) {
    case EConvertedVerifyType.SMS:
    case ESubVerificationDeviceType.SMS:
      return intl('attr:phone');
    case EConvertedVerifyType.EMAIL:
    case ESubVerificationDeviceType.EMAIL:
      return intl('attr:email');
    default: // MFA
      return intl('attr:mfa');
  }
}

export function intlVerifySetting(type?: EConvertedVerifyType | ESubVerificationDeviceType): string {
  switch (type) {
    case EConvertedVerifyType.SMS:
    case ESubVerificationDeviceType.SMS:
      return intl('op:change_phone');
    case EConvertedVerifyType.EMAIL:
    case ESubVerificationDeviceType.EMAIL:
      return intl('op:change_email');
    default: // MFA
      return intl('op:change_mfa');
  }
}

export function intlVerifyDeviceType(deviceType?: ESubVerificationDeviceType | undefined): string {
  switch (deviceType) {
    case ESubVerificationDeviceType.VMFA:
      return intl('title:sub_vmfa_auth');
    case ESubVerificationDeviceType.U2F:
      return intl('title:sub_u2f_auth');
    case ESubVerificationDeviceType.SMS:
      return intl('title:sms_auth');
    case ESubVerificationDeviceType.EMAIL:
      return intl('title:email_auth');
    default:
      return intl('title:default');
  }
}

export function intlVerifyDialogTitle({
  dialogType,
  currentSubVerificationDeviceType
}: IIntlVerifyDialogTitleProps): string {
  if (dialogType === EDialogType.SUB_RISK_VERIFICATION_AUTH) {
    return intlVerifyDeviceType(currentSubVerificationDeviceType);
  }

  return intl('title:default');
}