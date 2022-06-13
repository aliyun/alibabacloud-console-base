import {
  TDateFormat
} from '../types';

const OPTIONS_DATE: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

/**
 * https://stackoverflow.com/questions/65604554/intl-datetimeformat-returns-an-hour-over-24
 *
 * Chrome 有个 BUG，不认 hour12: false
 *
 * ```
 * new Intl.DateTimeFormat('zh-CN', {
 *   year: 'numeric',
 *   month: 'short',
 *   day: 'numeric',
 *   hour: '2-digit',
 *   minute: '2-digit',
 *   second: '2-digit',
 *   hour12: false
 * }).format(new Date('2021-09-12 00:09:12'))
 * ```
 *
 * - Chrome: 2021年9月12日 24:09:12
 * - Firefox: 021年9月12日 00:09:12
 *
 * 注意：hour12: boolean 和 hourCycle：'h11' | 'h12' | 'h23' | 'h24' 是不可共用的
 */
const OPTIONS_TIME: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23'
};

const OPTIONS_DATE_TIME: Intl.DateTimeFormatOptions = {
  ...OPTIONS_DATE,
  ...OPTIONS_TIME
};

export default function getFormatDateOptions(format?: TDateFormat): Intl.DateTimeFormatOptions {
  switch (format) {
    case 'date':
      return OPTIONS_DATE;
    case 'time':
      return OPTIONS_TIME;
    default:
      return OPTIONS_DATE_TIME;
  }
}