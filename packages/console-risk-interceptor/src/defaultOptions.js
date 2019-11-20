export default {
  code: {
    success: '200',
    // 风控检测到风险并需要二次验证
    doubleConfirm: 'FoundRiskAndDoubleConfirm',
    // 风控检测到风险需要中断业务流程
    forbidden: 'FoundRiskAndTip',
    // 二次验证不通过
    verifyCodeInvalid: 'verifyCodeInvalid',
  },
  url: {
    // 请求发送验证码接口地址
    generateVerificationCode: '/risk/sendVerifyMessage.json',
    // 设置用户风控验证方式地址
    setVerificationMethod: 'https://account.console.aliyun.com/#/secure',
    // 修改设置手机号/邮箱/MFA地址
    changeVerificationMethod: 'https://account.console.aliyun.com/#/secure',
    // 如何设置手机帮助
    bindMobileHelp: 'https://account.console.aliyun.com',
  },
}
