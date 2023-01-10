import {
  IErrorDetailsAuth
} from '../types';
import intl from '../intl';

export default function intlAuthType(detailsAuth: IErrorDetailsAuth): string | undefined {
  switch (detailsAuth.type) {
    case 'ExplicitDeny':
      return intl('attr:auth_type:explicit');
    case 'ImplicitDeny':
      return intl('attr:auth_type:implicit');
    default:
      return detailsAuth.type;
  }
}