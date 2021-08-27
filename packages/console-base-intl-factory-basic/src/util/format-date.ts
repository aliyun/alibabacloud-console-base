import _forEach from 'lodash/forEach';

import {
  TDateFormat
} from '../types';

/**
 * 当 Intl.DateTimeFormat 失败时回退至这个
 */
function fallbackFormat(d: Date, format = 'YYYY-MM-DD HH:mm:ss'): string {
  /**
   * 借鉴 moment
   * - `年Y月M日D季Q周W` 等大头都是大写的
   * - `时hH分m秒s` 都是小写的（时的话用大写的 H 表示 24 小时制）
   * - 毫秒是 S
   */
  const o = {
    'Q+': Math.floor((d.getMonth() + 3) / 3),
    'M+': d.getMonth() + 1,
    'D+': d.getDate(),
    'H+': d.getHours(),
    'm+': d.getMinutes(),
    's+': d.getSeconds(),
    S: d.getMilliseconds()
  };
  let pattern = format;
  
  if (/(Y+)/.test(pattern)) {
    pattern = pattern.replace(RegExp.$1, (`${d.getFullYear()}`).substr(4 - RegExp.$1.length));
  }
  
  _forEach(o, (v: number, k: string) => {
    if (new RegExp(`(${k})`).test(pattern)) {
      pattern = pattern.replace(RegExp.$1, RegExp.$1.length === 1 ? `${v}` : (`00${v}`).substring((`${v}`).length));
    }
  });
  
  return pattern;
}

const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

const timeOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false // 默认居然是 true
};

const dateTimeOptions: Intl.DateTimeFormatOptions = {
  ...dateOptions,
  ...timeOptions
};

function getFormatOptions(format?: TDateFormat): Intl.DateTimeFormatOptions {
  switch (format) {
    case 'date':
      return dateOptions;
    case 'time':
      return timeOptions;
    default:
      return dateTimeOptions;
  }
}

function getFormatPattern(format?: TDateFormat): string {
  switch (format) {
    case 'date':
      return 'YYYY-MM-DD';
    case 'time':
      return 'HH:mm:ss';
    default:
      return 'YYYY-MM-DD HH:mm:ss';
  }
}

/**
 * 格式化日期时间
 */
export default function formatDate(date: Date, format?: TDateFormat, locale = 'en-US'): string {
  try {
    return new Intl.DateTimeFormat(locale, getFormatOptions(format)).format(date);
  } catch (err) {
    return fallbackFormat(date, getFormatPattern(format));
  }
}
