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
  'message:no_get_code_url': '获取验证码 URL 未设置，请联系开发。'
};
