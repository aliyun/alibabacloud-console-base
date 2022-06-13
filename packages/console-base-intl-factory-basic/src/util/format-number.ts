import formatNumberFallback from './format-number-fallback';

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
export default function formatNumber(n: number, options?: Intl.NumberFormatOptions, locale = 'en-US'): string {
  try {
    return new Intl.NumberFormat(locale, options).format(n);
  } catch (err) {
    return formatNumberFallback(n, options?.minimumFractionDigits);
  }
}