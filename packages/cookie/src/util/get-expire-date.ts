export default function getExpireDate(days: number): string {
  if (!days) {
    return ''; // session cookie
  }
  
  const d = new Date(); // 过期时间
  
  d.setDate(d.getDate() + days);
  
  return d.toUTCString();
}
