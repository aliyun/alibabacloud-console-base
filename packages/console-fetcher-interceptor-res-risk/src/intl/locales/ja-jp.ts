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
  'attr:vmfa_auth_userName': 'UserName',
  'attr:vmfa_auth_code': 'Verification Code',
  'attr:vmfa_bind_code1': 'The First Security Code',
  'attr:vmfa_bind_code2': 'The Second Security Code',
  'attr:vmfa_bind_info_title': 'Authentication Information',
  'attr:vmfa_bind_info_account': 'Account: ',
  'attr:vmfa_bind_info_key': 'Key: ',
  'attr:mfa_choose_vmfa': 'Virtual MFA Device',
  'attr:mfa_choose_u2f': 'U2F Security Key',
  'title:main': 'Identity Verification Service',
  'title:sub_mfa_choose': 'Select MFA Device Type',
  'title:sub_vmfa_bind': 'Bind Virtual MFA Device',
  'title:sub_u2f_bind': 'Bind U2F Security Key',
  'title:sub_vmfa_auth': 'Auth Virtual MFA Device',
  'title:sub_u2f_auth': 'Auth U2F Security Key',
  'title:sub_default': 'RAM Account Risk Control Verification',
  'message:u2f_browser_not_support': 'Your browser does not support the U2F security key, or the version of your browser is outdated.',
  'message:u2f_http_not_support': 'HTTP web pages do not support U2F security keys.',
  'message:u2f_bind_confirm_tip': 'Do You Allow the Browser to View Brand and Type of U2F Security Key?',
  'message:u2f_get_key_cancel': 'The process of obtaining the U2F security key is terminated. Please go back to the previous step and try again.',
  'message:u2f_bind_get_key': 'Waiting for the U2F security key...',
  'message:u2f_bind_get_key_success': 'The U2F security key is obtained.',
  'message:vmfa_bind_step1': 'The First Step: Scan the code to bind, or manually enter the key.',
  'message:vmfa_bind_step2': 'The Second Step: Fill in two sets of security key.',
  'message:mfa_choose_vmfa': 'You must install the MFA application on your mobile phone.',
  'message:mfa_choose_u2f': 'YubiKey or other U2F compliant security keys.',
  'message:u2f:bind:description!lines!html': `<strong>Please follow the instructions below to bind the U2F security key:</strong>
1. Insert the U2F security key into the USB port of the computer;
2. Tap the button on the U2F security key.`,
  'message:u2f:auth:description!lines!html': `<strong>Please follow the instructions below to verify the U2F security key:</strong>
1. Insert the U2F security key into the USB port of the computer;
2. Tap the button on the U2F security key.`
};
