import {
  IErrorDetailsAuth
} from '../types';
import intl from '../intl';

import intlAuthUserType from './intl-auth-user-type';

export default function getAuthUserDisplayInfo(detailsAuth: IErrorDetailsAuth): Record<string, string | undefined> | undefined {
  const {
    userType,
    userName,
    userId
  } = detailsAuth;
  
  if (!userType && !userName && !userId) {
    return;
  }
  
  return {
    [intl('attr:auth_user_type')]: intlAuthUserType(detailsAuth),
    [intl('attr:auth_user_name')]: userName,
    [intl('attr:auth_user_id')]: userId
  };
}