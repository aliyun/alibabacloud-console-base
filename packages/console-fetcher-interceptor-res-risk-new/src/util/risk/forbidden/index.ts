import {
  alert
} from '@alicloud/console-base-rc-dialog';

import intl from '../../../intl';

export default function forbiddenAlert(): Promise<void> {
  return alert({
    title: intl('op:risk_forbidden'),
    content: intl('message:forbidden')
  }, {
    ok: intl('op:confirm') // 自定义按钮文案
  });
}