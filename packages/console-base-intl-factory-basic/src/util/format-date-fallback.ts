import _forEach from 'lodash/forEach';

/**
 * 当 Intl.DateTimeFormat 失败时的兜底方法
 */
export default function formatDateFallback(d: Date, format = 'YYYY-MM-DD HH:mm:ss'): string {
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
    pattern = pattern.replace(RegExp.$1, `${d.getFullYear()}`.substring(4 - RegExp.$1.length));
  }
  
  _forEach(o, (v: number, k: string) => {
    if (new RegExp(`(${k})`).test(pattern)) {
      pattern = pattern.replace(RegExp.$1, RegExp.$1.length === 1 ? `${v}` : `00${v}`.substring(`${v}`.length));
    }
  });
  
  return pattern;
}