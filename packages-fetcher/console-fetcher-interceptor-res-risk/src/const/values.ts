// 处理过了的风控错误，业务 UI 层无需再对其进行报错视图，忽略即可（但对于数据层来说还是一种错误）
export const ERROR_RISK_FORBIDDEN = 'FetcherErrorRiskForbidden'; // 风控说「你无法继续」 - 有 UI 对用户提示
export const ERROR_RISK_INVALID = 'FetcherErrorRiskInvalid'; // 风控验证设置无效，需用户进行设置 - 有 UI 对用户提示
export const ERROR_RISK_CANCELLED = 'FetcherErrorRiskCancelled'; // 用户取消风控验证

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