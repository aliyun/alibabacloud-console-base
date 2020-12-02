export default function getExpireDate(days) {
  if (!days) {
    return ''; // session cookie
  }

  var d = new Date(); // 过期时间

  d.setDate(d.getDate() + days);
  return d.toUTCString();
}