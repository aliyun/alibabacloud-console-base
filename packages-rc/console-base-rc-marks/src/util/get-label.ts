import {
  TMarkType
} from '../types';
import intl from '../intl';

export default function getLabel(type: TMarkType): string {
  switch (type) {
    case 'NEW':
      return intl('label:new');
    case 'HOT':
      return intl('label:hot');
    case 'UPDATE':
      return intl('label:update');
    case 'ALPHA':
      return intl('label:alpha');
    case 'BETA':
      return intl('label:beta');
    case 'PUBLIC_BETA':
      return intl('label:public_beta');
    default:
      return '?';
  }
}
