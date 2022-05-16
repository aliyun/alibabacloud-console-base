import {
  TDateFormat
} from '../types';

import formatDateFallback from './format-date-fallback';
import getFormatDateFallbackPattern from './get-format-date-fallback-pattern';
import getFormatDateOptions from './get-format-date-options';

/**
 * 格式化日期时间
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */
export default function formatDate(date: Date, format?: TDateFormat, locale = 'en-US'): string {
  try {
    return new Intl.DateTimeFormat(locale, getFormatDateOptions(format)).format(date);
  } catch (err) {
    return formatDateFallback(date, getFormatDateFallbackPattern(format));
  }
}
