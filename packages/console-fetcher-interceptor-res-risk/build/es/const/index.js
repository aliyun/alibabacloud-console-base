// 处理过了的风控错误，业务 UI 层无需再对其进行报错视图，忽略即可（但对于数据层来说还是一种错误）
export var ERROR_RISK_FORBIDDEN = 'FetcherErrorRiskForbidden'; // 风控说「你无法继续」 - 有 UI 对用户提示

export var ERROR_RISK_INVALID = 'FetcherErrorRiskInvalid'; // 风控验证设置无效，需用户进行设置 - 有 UI 对用户提示

export var ERROR_RISK_CANCELLED = 'FetcherErrorRiskCancelled'; // 用户取消风控验证

/**
 * 这里内部使用的二次验证类型，跟数据解耦
 */

export var EVerifyType;

(function (EVerifyType) {
  EVerifyType["SMS"] = "sms";
  EVerifyType["EMAIL"] = "email";
  EVerifyType["MFA"] = "mfa";
  EVerifyType["NONE"] = "NONE";
  EVerifyType["UNKNOWN"] = "UNKNOWN";
})(EVerifyType || (EVerifyType = {}));

export var DEFAULT_RISK_CONFIG = {
  // 风控设置
  DATA_PATH_VERIFY_TYPE: 'data.verifyType',
  DATA_PATH_VERIFY_DETAIL: 'data.verifyDetail',
  DATA_PATH_VERIFY_CODE_TYPE: 'data.codeType',
  CODE_NEED_VERIFY: 'FoundRiskAndDoubleConfirm',
  CODE_FORBIDDEN: 'FoundRiskAndTip',
  CODE_INVALID_INPUT: 'verifyCodeInvalid',
  // 愚蠢 干啥这个就小写了...
  BY_SMS: 'sms',
  BY_EMAIL: 'email',
  BY_MFA: 'ga',
  URL_SEND_CODE: '/risk/sendVerifyMessage.json',
  URL_SETTINGS: '//account.console.aliyun.com/#/secure',
  COOLING_AFTER_SENT: 60,
  COOLING_AFTER_SEND_FAIL: 10,
  METHOD_SEND_CODE: 'POST'
};