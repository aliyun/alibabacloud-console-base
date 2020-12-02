import {
  alert
} from '@alicloud/console-base-rc-dialog';

import intl from '../../../intl';

/**
 * 风控 - 操作中止
 */
export default (): Promise<void> => alert({
  title: intl('op:risk_forbidden'),
  content: intl('message:forbidden')
}, {
  ok: intl('op:confirm')
});
