import CONF_ENV from '@alicloud/console-base-conf-env';

import {
  EAccountType
} from './enum';

export const TICKET_TYPE = ((): string => {
  const forService = CONF_ENV.DOMAIN_IS_4SERVICE;

  return forService ? 'mini' : '';
})();
export const SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD = {
  Origin: 'console' as const,
  TicketType: TICKET_TYPE,
  AccountType: EAccountType.SUB
};

export const SEND_CODE_OLD_API = '/risk/sendVerifyMessage.json';
export const VERIFY_API = '/identity/verify';
export const BIND_MFA_API = '/identity/bindMFA';
export const SEND_CODE_API = '/identity/send';
export const SKIP_BIND_MFA_API = '/identity/skip';
export const GET_MFA_INFO_TO_AUTH_API = '/identity/getMfaInfoToAuth';
export const GET_MFA_INFO_TO_BIND_API = '/identity/getMfaInfoToBind';
export const GET_VERIFICATION_INFO_TO_AUTH = '/identity/getMfaInfoToAuthV2';