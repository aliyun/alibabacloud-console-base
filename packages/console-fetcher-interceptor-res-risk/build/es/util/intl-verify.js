import { EVerifyType } from '../const';
import intl from '../intl';
export function intlVerifyTitle(type) {
  switch (type) {
    case EVerifyType.SMS:
      return intl('op:verify_by_phone');

    case EVerifyType.EMAIL:
      return intl('op:verify_by_email');

    default:
      // MFA
      return intl('op:verify_by_mfa');
  }
}
export function intlVerifyLabel(type) {
  switch (type) {
    case EVerifyType.SMS:
      return intl('attr:phone');

    case EVerifyType.EMAIL:
      return intl('attr:email');

    default:
      // MFA
      return intl('attr:mfa');
  }
}
export function intlVerifySetting(type) {
  switch (type) {
    case EVerifyType.SMS:
      return intl('op:change_phone');

    case EVerifyType.EMAIL:
      return intl('op:change_email');

    default:
      // MFA
      return intl('op:change_mfa');
  }
}