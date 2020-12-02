import {
  EVerifyType
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
