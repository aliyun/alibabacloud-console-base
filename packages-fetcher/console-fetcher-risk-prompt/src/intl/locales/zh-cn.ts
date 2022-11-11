export default {
  'attr:phone': '绑定的手机',
  'attr:email': '绑定的邮箱',
  'attr:mfa': '验证虚拟 MFA 设备',
  'attr:code': '校验码',
  'op:confirm': '确定',
  'op:cancel': '取消',
  'op:risk_forbidden': '操作中止',
  'op:risk_invalid_go': '请到新开窗口完成设置',
  'op:risk_invalid': '绑定验证方式',
  'op:verify_by_phone': '手机验证',
  'op:verify_by_email': '邮箱验证',
  'op:verify_by_mfa': 'MFA 验证',
  'op:send_code': '点击获取',
  'op:change_phone': '更换手机',
  'op:change_email': '更换邮箱',
  'op:change_mfa': '解除 MFA 绑定',
  'op:resend_after_{n}s': '{n} 秒后重发',
  'message:invalid_unknown!lines': `系统没有检测到验证方式。
为了保障您的账户安全，请先设置验证方式。`,
  'message:invalid_unsupported_{method}!html!lines': `系统检测到验证方式 <code>{method}</code> 有误。
为了保障您的账户安全，请先设置验证方式。`,
  'message:forbidden': '检测到存在严重安全风险，该操作无法执行，请联系客服。',
  'message:code_required': '请输入校验码。',
  'message:code_send_error': '校验码发送失败，请稍后重试。',
  'message:code_incorrect': '校验码不正确，请重新输入。',
  'message:verify_cancelled': '用户取消验证。',
  'message:no_get_code_url': '获取验证码 URL 未设置，请联系开发。',

  'op:previous_step': '上一步',
  'op:retry': '重试',
  'op:skip': '跳过',
  'op:view_security_code': '查看安全码',
  'attr:vmfa_auth_userName': '用户名',
  'attr:vmfa_auth_code': '校验码',
  'attr:vmfa_bind_code1': '第一组校验码',
  'attr:vmfa_bind_code2': '第二组校验码',
  'attr:vmfa_bind_info_title': '身份验证信息',
  'attr:vmfa_bind_info_account': '用户名：',
  'attr:vmfa_bind_info_key': '密钥：',
  'attr:u2f_insert': '将 U2F 安全密钥插入计算机的 USB 端口',
  'attr:u2f_click': '点击 U2F 安全密钥上的按钮',
  'attr:u2f_auth_title': '请按照下述说明验证 U2F 安全密钥',
  'attr:u2f_bind_title': '请按照下述说明绑定 U2F 安全密钥',
  'attr:mfa_choose_vmfa': '虚拟 MFA 设备',
  'attr:mfa_choose_u2f': 'U2F 安全密钥',
  'attr:mfa_show_secret': '显示密钥',
  'attr:mfa_hide_secret': '隐藏密钥',
  'title:main': '安全验证',
  'title:sub_vmfa_bind': '绑定虚拟 MFA 设备',
  'title:sub_u2f_bind': '绑定 U2F 安全密钥',
  'title:sub_vmfa_auth': '验证虚拟 MFA 设备',
  'title:sub_u2f_auth': '验证 U2F 安全密钥',
  'title:sub_default': '安全验证',
  'message:incorrect_mfa_bind': '安全验证失败，请重试。',
  'message:incorrect_u2f_auth': '验证 U2F 安全密钥失败，请重新获取 U2F 安全密钥信息，并提交验证。',
  'message:u2f_get_key_fail': '获取 U2F 安全密钥失败，请重试。',
  'message:get_u2f_key_params_error': '获取 U2F 安全密钥的参数错误。',
  'message:u2f_operation_fail_or_timeout': '获取 U2F 安全密钥操作超时或不被允许。',
  'message:u2f_browser_not_support': '您的浏览器不支持 U2F 安全密钥或者浏览器版本过低。',
  'message:u2f_get_key_cancel': '获取 U2F 安全密钥流程被终止，请重试。',
  'message:u2f_bind_get_key': '正在等待 U2F 安全密钥...',
  'message:u2f_bind_get_key_success': '获取 U2F 安全密钥成功。',
  'message:vmfa_bind_step1': '第一步：扫码绑定，或手动输入密钥。',
  'message:vmfa_bind_step2': '第二步：填写两组校验码。',
  'message:vmfa_input_error_tip': '校验码必须为 6 位数字。',
  'message:vmfa_input_empty_tip': '校验码不能为空。',
  'message:mfa_choose_vmfa': '您需要在手机上准备好 MFA 应用程序。',
  'message:mfa_choose_u2f': 'YubiKey 或任何其他兼容的 U2F 设备。',
  'message:mfa_choose_tip': '子用户在进行敏感操作时需要进行安全验证，您需要通过下列方式绑定 MFA 设备。',
  'message:new_main_verify_error': '安全验证服务发生未知错误，请重试。',
  'message:sub_invalid_unsupported_{method}!html!lines': `系统检测到验证方式 <code>{method}</code> 有误。
为了保障您的账户安全，请先联系主账号或 RAM 管理员在 RAM 控制台设置验证方式。`,
  'message:update_app_tip_{url}!html': '阿里云 App 最新版提供了 MFA 验证码快速输入功能，请 <a href="{url}" target="_blank">升级 App</a>。',
  'message:invalid_unsupported_{method}!html': '系统检测到验证方式 <code>{method}</code> 有误，请重试。'
};
