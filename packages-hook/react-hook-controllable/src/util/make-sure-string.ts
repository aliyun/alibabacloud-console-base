// 避免传入的 value（误传或 JS 下无类型）不是 string 导致的错误
export default function makeSureString(value: unknown = ''): string {
  if (typeof value === 'string') {
    return value;
  }
  
  if (value === null || value === undefined) {
    return '';
  }
  
  return String(value);
}