export default {
  'attr:phone': '電話',
  'attr:email': 'Eメール',
  'attr:mfa': '仮想MFAデバイス',
  'attr:code': '認証コード',
  'op:confirm': 'OK',
  'op:cancel': 'キャンセル',
  'op:risk_forbidden': '操作中止',
  'op:risk_invalid_go': '新しいウィンドウで設定を完了する',
  'op:risk_invalid': '認証方法',
  'op:verify_by_phone': '電話により認証',
  'op:verify_by_email': 'メールにより認証',
  'op:verify_by_mfa': 'MFA認証',
  'op:send_code': 'コードの取得',
  'op:change_phone': '変更',
  'op:change_email': '変更',
  'op:change_mfa': 'バインド解除',
  'op:resend_after_{n}s': '{n} 秒',
  'message:invalid_unknown!lines': `認証方法が見つかりませんでした。
アカウントのセキュリティを保護するには、まず認証方法を設定します。`,
  'message:invalid_unsupported_{method}!html!lines': `確認方法 <code>{method}</code> が正しくありません。
アカウントのセキュリティを保護するには、まず認証方法を設定します。`,
  'message:forbidden': '高いセキュリティリスクが検出されたため、操作を完了できません。サポートセンターに連絡してください。',
  'message:code_required': '確認コードを入力してください。',
  'message:code_send_error': '確認コードの送信に失敗しました。しばらくしてからもう一度試してください。',
  'message:code_incorrect': '確認コードが正しくありません。もう一度入力してください。',
  'message:verify_cancelled': '確認はユーザーによってキャンセルされました。',
  'message:no_get_code_url': '確認コードのURLが設定されていないことを確認し、開発に連絡してください。',

  'op:previous_step': 'Previous',
  'op:retry': 'Retry',
  'attr:vmfa_auth_userName': 'UserName',
  'attr:vmfa_auth_code': 'Verification Code',
  'attr:vmfa_bind_code1': 'The First Security Code',
  'attr:vmfa_bind_code2': 'The Second Security Code',
  'attr:vmfa_bind_info_title': 'Authentication Information',
  'attr:vmfa_bind_info_account': 'Account: ',
  'attr:vmfa_bind_info_key': 'Key: ',
  'attr:u2f_insert': 'Insert the U2F security key into the USB port of the computer',
  'attr:u2f_click': 'Tap the button on the U2F security key',
  'attr:u2f_auth_title': 'Please follow the instructions below to verify the U2F security key',
  'attr:u2f_bind_title': 'Please follow the instructions below to bind the U2F security key',
  'attr:mfa_choose_vmfa': 'Virtual MFA Device',
  'attr:mfa_choose_u2f': 'U2F Security Key',
  'title:main': 'Safefy Verification',
  'title:sub_vmfa_bind': 'Bind Virtual MFA Device',
  'title:sub_u2f_bind': 'Bind U2F Security Key',
  'title:sub_vmfa_auth': 'Auth Virtual MFA Device',
  'title:sub_u2f_auth': 'Auth U2F Security Key',
  'title:sub_default': 'RAM Account Safety Verification',
  'message:incorrect_u2f_bind': 'Failed to bind the U2F security key, please obtain the U2F security key information again and submit the binding.',
  'messsage:incorrect_u2f_auth': 'Failed to auth the U2F security key, please obtain the U2F security key information again and submit the authing.',
  'message:u2f_get_key_fail': 'Failed to obtain U2F security key. Please try again.',
  'message:u2f_get_key_timeout': 'Obtaining the U2F security key timed out. Please try again.',
  'message:u2f_browser_not_support': 'Your browser does not support the U2F security key, or the version of your browser is outdated.',
  'message:u2f_http_not_support': 'HTTP web pages do not support U2F security keys.',
  'message:u2f_bind_confirm_tip': 'Do You Allow the Browser to View Brand and Type of U2F Security Key?',
  'message:u2f_get_key_cancel': 'The process of obtaining the U2F security key is terminated. Please try again.',
  'message:u2f_bind_get_key': 'Waiting for the U2F security key...',
  'message:u2f_bind_get_key_success': 'The U2F security key is obtained.',
  'message:vmfa_bind_step1': 'The First Step: Scan the code to bind, or manually enter the key.',
  'message:vmfa_bind_step2': 'The Second Step: Fill in two sets of security code.',
  'message:vmfa_input_error_tip': 'Security code must be 6-digit.',
  'message:vmfa_input_empty_tip': 'Security code cannot be empty.',
  'message:mfa_choose_vmfa': 'You must install the MFA application on your mobile phone.',
  'message:mfa_choose_u2f': 'YubiKey or other U2F compliant security keys.',
  'message:mfa_choose_tip': 'Security verification is required when performing sensitive operations. Please bind the MFA device in the following ways.',
  'message:new_main_verify_error': 'UnKown error occurred，please try again.',
  'message:sub_invalid_unsupported_{method}!html!lines': `Verification method <code>{method}</code> is not supported.
  To protect your account, use your Alibaba Cloud account or the RAM user that has administrative rights to log on to the RAM console and reset the verification method.`
};
