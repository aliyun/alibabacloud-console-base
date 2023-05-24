import {
  BlockReason,
  ChangeType
} from '../../../data';
import intl from '../../../intl';
import {
  URL_CM_CALENDAR,
  URL_CF_CALENDAR
} from '../const';

import useBlockReason from './use-block-reason';
import useChangeType from './use-change-type';

export default function useIntlBlockReasonMessage(): string {
  const blockReason = useBlockReason();
  const changeType = useChangeType();
  
  switch (blockReason) {
    case BlockReason.FUSING:
      return intl('safeguard:message:block_reason_fusing_{urlCalendar}!html', {
        urlCalendar: changeType === ChangeType.CF ? URL_CF_CALENDAR : URL_CM_CALENDAR
      });
    case BlockReason.NON_WINDOW:
      return intl('safeguard:message:block_reason_non_window');
    case BlockReason.FORCED:
      return intl('safeguard:message:block_reason_forced');
    default:
      return '';
  }
}
