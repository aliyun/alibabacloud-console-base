import {
  EVerifyType,
  EDialogType
} from '../const';
import intl from '../intl';

export function intlVerifyTitle(type: EVerifyType): string {
  switch (type) {
    case EVerifyType.SMS:
      return intl('op:verify_by_phone');
    case EVerifyType.EMAIL:
      return intl('op:verify_by_email');
    default: // MFA
      return intl('op:verify_by_mfa');
  }
}

export function intlVerifyLabel(type: EVerifyType): string {
  switch (type) {
    case EVerifyType.SMS:
      return intl('attr:phone');
    case EVerifyType.EMAIL:
      return intl('attr:email');
    default: // MFA
      return intl('attr:mfa');
  }
}

export function intlVerifySetting(type: EVerifyType): string {
  switch (type) {
    case EVerifyType.SMS:
      return intl('op:change_phone');
    case EVerifyType.EMAIL:
      return intl('op:change_email');
    default: // MFA
      return intl('op:change_mfa');
  }
}

export function intlVerifyDialogTitle(dialogType: EDialogType): string {
  switch (dialogType) {
    case EDialogType.SUB_RISK_VMFA_BIND:
      return intl('title:sub_vmfa_bind');
    case EDialogType.SUB_RISK_U2F_BIND:
      return intl('title:sub_u2f_bind');
    case EDialogType.SUB_RISK_VMFA_AUTH:
      return intl('title:sub_vmfa_auth');
    case EDialogType.SUB_RISK_U2F_AUTH:
      return intl('title:sub_u2f_auth');
    default:
      return intl('title:main');
  }
}