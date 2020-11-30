export default function getDomain(): string {
  const {
    location: {
      hostname
    }
  } = window;
  
  if (/^\d[\d.]*\d$/.test(hostname)) { // 纯 IP，直接返回
    return hostname;
  }
  
  const arr = hostname.split('.');
  
  if (arr.length >= 3) { // 返回二级域名
    return `.${arr[arr.length - 2]}.${arr[arr.length - 1]}`;
  }
  
  return hostname;
}
