/**
 * 根据 userAgent 判断 ua 是否是阿里云 APP，以及获取 APP 的版本
 */
function getAliyunAppVersion(): string {
  if (/aliyun(?:app)?\/([\d.]+)/i.test(navigator.userAgent)) {
    return RegExp.$1;
  }
  
  return '';
}

export default getAliyunAppVersion();