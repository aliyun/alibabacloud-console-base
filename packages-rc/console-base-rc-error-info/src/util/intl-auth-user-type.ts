import {
  IErrorDetailsAuth
} from '../types';
import intl from '../intl';

export default function intlAuthUserType(detailsAuth: IErrorDetailsAuth): string | undefined {
  switch (detailsAuth.userType) {
    case 'SubUser':
      return intl('attr:auth_user_type:ram');
    case 'AssumedRoleUser':
      return intl('attr:auth_user_type:sts');
    default:
      return detailsAuth.userType;
  }
}