import {
  alert
} from '@alicloud/console-base-rc-dialog';

import {
  slsRiskForbidden
} from '../../sls';
import {
  defaultDialogSize
} from '../../../const';
import intl from '../../../intl';

/**
 * 风控 - 操作中止
 */
export default (): Promise<void> => {
  slsRiskForbidden();
  
  return alert({
    size: defaultDialogSize,
    title: intl('op:risk_forbidden'),
    content: intl('message:forbidden')
  }, {
    ok: intl('op:confirm')
  });
};
