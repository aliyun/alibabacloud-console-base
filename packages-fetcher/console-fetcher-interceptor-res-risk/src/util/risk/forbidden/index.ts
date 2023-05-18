import {
  alert
} from '@alicloud/console-base-rc-dialog';
import sls from '@alicloud/console-base-log-sls';

import {
  DEFAULT_DIALOG_SIZE
} from '../../../const';
import intl from '../../../intl';

/**
 * 风控 - 操作中止
 */
export default function riskForbidden(): Promise<void> {
  sls('risk_forbidden');
  
  return alert({
    size: DEFAULT_DIALOG_SIZE,
    title: intl('op:risk_forbidden'),
    content: intl('message:forbidden')
  }, {
    ok: intl('op:confirm')
  });
}
