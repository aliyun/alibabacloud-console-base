import {
  BlockReason
} from '../../../data';
import intl from '../../../intl';

import useBlockReason from './use-block-reason';

export default function useIntlBlockReason(): string {
  const blockReason = useBlockReason();
  
  switch (blockReason) {
    case BlockReason.NORMAL:
      return intl('safeguard:block_reason_normal');
    case BlockReason.FUSING:
      return intl('safeguard:block_reason_fusing');
    case BlockReason.NON_WINDOW:
      return intl('safeguard:block_reason_non_window');
    case BlockReason.FORCED:
      return intl('safeguard:block_reason_forced');
    default:
      return blockReason;
  }
}
