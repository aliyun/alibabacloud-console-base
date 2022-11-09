export const ALIYUN_APP_VERSION = ((): string => {
  if (/aliyun(?:app)?\/([\d.]+)/i.test(navigator.userAgent)) {
    return RegExp.$1;
  }
  
  return '';
})();

export const DEFAUT_DIALOG_SIZE = ALIYUN_APP_VERSION ? 'xs' : 'm'; // 移动端阿里云 app 内的风控弹窗尺寸较小