import {
  IFetcherInterceptorConfig
} from '../types';

export const ALIYUN_APP_VERSION = ((): string => {
  if (/aliyun(?:app)?\/([\d.]+)/i.test(navigator.userAgent)) {
    return RegExp.$1;
  }
  
  return '';
})();

export const DEFAUT_DIALOG_SIZE = ALIYUN_APP_VERSION ? 'xs' : 'm'; // 移动端阿里云 app 内的风控弹窗尺寸较小

/**
 * 校验虚拟 MFA 校验码的规则：6位数字
 */
export const REG_MFA_CODE = /^[0-9]{6}$/;

/*
  *  用到的 SVG 图像的链接 
  */
export const SVG_URLS = {
  U2F_INSERT: 'https://img.alicdn.com/imgextra/i1/O1CN01UuCEK71WIsE3LvTB3_!!6000000002766-55-tps-86-86.svg',
  U2F_CLICK: 'https://img.alicdn.com/imgextra/i3/O1CN01ryyaVx1OZLXnuN6Mn_!!6000000001719-55-tps-86-86.svg',
  U2F_ICON: 'https://img.alicdn.com/imgextra/i3/O1CN01F386u021hNVTPjltB_!!6000000007016-55-tps-123-123.svg',
  VMFA_ICON_GREY: 'https://img.alicdn.com/imgextra/i1/O1CN01JabR2128pLi0tVEDE_!!6000000007981-55-tps-123-123.svg',
  VMFA_ICON_WHITE: 'https://img.alicdn.com/imgextra/i1/O1CN01RoiIfD1wtg3vK02Fk_!!6000000006366-55-tps-123-123.svg'
};

/**
 * 阿里云 APP 下载链接
 */
export const ALIYUN_APP_DOWNLOAD_URL = 'https://download.app.aliyun.com/app/aliyunapp/download/home?ulinks_fallback=aliyun%3A%2F%2Fforward%2Fapp%3Ftarget_%3D%2Fram%2Fhome%26pluginId_%3D9';

/**
 * 风控设置
 */
export const DEFAULT_RISK_CONFIG: Required<IFetcherInterceptorConfig> = {
  // 风控错误码
  CODE_NEED_VERIFY: 'FoundRiskAndDoubleConfirm',
  CODE_FORBIDDEN: 'FoundRiskAndTip',
  CODE_INVALID_INPUT: 'verifyCodeInvalid'
};
