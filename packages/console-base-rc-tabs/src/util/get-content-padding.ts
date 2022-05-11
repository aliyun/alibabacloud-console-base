import {
  TabContentPadding
} from '../model';

export default function getContentPadding(contentPadding: TabContentPadding): string {
  switch (contentPadding) {
    case 'top':
      return '12px 0 0 0';
    case 'around':
      return '12px';
    default:
      return '0';
  }
}