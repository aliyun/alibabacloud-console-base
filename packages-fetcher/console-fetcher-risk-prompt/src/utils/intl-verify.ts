import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  EVerifyType,
  EDialogType,
  ESubBindMfaStep
} from '../enum';
import intl from '../intl';

interface IIntlVerifyDialogTitleProps {
  dialogType?: EDialogType;
  subBindMfaStep?: ESubBindMfaStep;
  subVerificationDeviceType?: ESubVerificationDeviceType | 'bind_mfa';
}

export function intlVerifyTitle(type?: EVerifyType | ESubVerificationDeviceType): string {
  switch (type) {
    case EVerifyType.SMS:
    case ESubVerificationDeviceType.SMS:
      return intl('op:verify_by_phone');
    case EVerifyType.EMAIL:
    case ESubVerificationDeviceType.EMAIL:
      return intl('op:verify_by_email');
    default: // MFA
      return intl('op:verify_by_mfa');
  }
}

export function intlVerifyLabel(type?: EVerifyType | ESubVerificationDeviceType): string {
  switch (type) {
    case EVerifyType.SMS:
    case ESubVerificationDeviceType.SMS:
      return intl('attr:phone');
    case EVerifyType.EMAIL:
    case ESubVerificationDeviceType.EMAIL:
      return intl('attr:email');
    default: // MFA
      return intl('attr:mfa');
  }
}

export function intlVerifySetting(type?: EVerifyType | ESubVerificationDeviceType): string {
  switch (type) {
    case EVerifyType.SMS:
    case ESubVerificationDeviceType.SMS:
      return intl('op:change_phone');
    case EVerifyType.EMAIL:
    case ESubVerificationDeviceType.EMAIL:
      return intl('op:change_email');
    default: // MFA
      return intl('op:change_mfa');
  }
}

export function intlVerifyDialogTitle({
  dialogType,
  subBindMfaStep,
  subVerificationDeviceType
}: IIntlVerifyDialogTitleProps): string {
  if (dialogType === EDialogType.SUB_RISK_MFA_BIND) {
    switch (subBindMfaStep) {
      case ESubBindMfaStep.BIND_U2F:
        return intl('title:sub_u2f_bind');
      case ESubBindMfaStep.BIND_VMFA:
        return intl('title:sub_vmfa_bind');
      default:
        return intl('title:default');
    }
  }

  if (dialogType === EDialogType.SUB_RISK_VERIFICATION_AUTH) {
    switch (subVerificationDeviceType) {
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

  return intl('title:default');
}