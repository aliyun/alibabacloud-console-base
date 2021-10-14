import {
  ErrorCodes
} from '@alicloud/u2f-api';

import intl from '../intl';

export default function intlU2FError(code?: number): string {
  if (code === ErrorCodes.TIMEOUT) {
    return intl('message:u2f_get_key_fail');
  }
  
  return intl('message:u2f_get_key_timeout');
}