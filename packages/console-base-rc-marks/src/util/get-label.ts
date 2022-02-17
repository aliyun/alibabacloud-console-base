import {
  EMarkType
} from '../enum';
import intl from '../intl';

export default function getLabel(type: EMarkType): string {
  switch (type) {
    case EMarkType.NEW:
      return intl('label:new');
    case EMarkType.HOT:
      return intl('label:hot');
    case EMarkType.UPDATE:
      return intl('label:update');
    case EMarkType.ALPHA:
      return intl('label:alpha');
    case EMarkType.BETA:
      return intl('label:beta');
    case EMarkType.PUBLIC_BETA:
      return intl('label:public_beta');
    default:
      return '?';
  }
}
