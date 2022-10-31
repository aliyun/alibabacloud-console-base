import {
  alert
} from '@alicloud/console-base-rc-dialog';

import intl from '../intl';

export default function fakeLogin(): void {
  alert({
    title: intl('fake_log_in:title'),
    content: intl('fake_log_in:message!html!lines')
  });
}