import {
  BlockReason
} from '../data';

import intl from './intl-base';

const MAPPING: Record<BlockReason, string> = {
  [BlockReason.NORMAL]: intl('safeguard:reason_normal'),
  [BlockReason.FUSING]: intl('safeguard:reason_fusing'),
  [BlockReason.NON_WINDOW]: intl('safeguard:reason_non_window'),
  [BlockReason.FORCED]: intl('safeguard:reason_forced')
};

export default function intlBlockReason(reason: BlockReason): string {
  return MAPPING[reason] || reason;
}
