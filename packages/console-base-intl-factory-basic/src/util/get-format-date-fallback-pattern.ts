import {
  TDateFormat
} from '../types';

export default function getFormatDateFallbackPattern(format?: TDateFormat): string {
  switch (format) {
    case 'date':
      return 'YYYY-MM-DD';
    case 'time':
      return 'HH:mm:ss';
    default:
      return 'YYYY-MM-DD HH:mm:ss';
  }
}