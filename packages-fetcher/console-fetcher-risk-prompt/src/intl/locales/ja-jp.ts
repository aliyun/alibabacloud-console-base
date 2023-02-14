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
  アカウントを保護するには、まず認証方法を正しく設定してください。`,
  'message:forbidden': '高いセキュリティリスクが検出されたため、操作を完了できません。サポートセンターに連絡してください。',
  'message:code_required': '確認コードを入力してください。',
  'message:code_send_error': '確認コードの送信に失敗しました。しばらくしてからもう一度試してください。',
  'message:code_incorrect': '確認コードが正しくありません。もう一度入力してください。',
  'message:verify_cancelled': '確認はユーザーによってキャンセルされました。',
  'message:no_get_code_url': '確認コードのURLが設定されていないことを確認し、開発に連絡してください。',
  
  'op:previous_step': '前',
  'op:retry': 'リトライ',
  'op:skip': 'スキップ',
  'op:view_security_code': 'セキュリティコードを表示する',
  'attr:vmfa_auth_userName': 'ユーザー名',
  'attr:vmfa_auth_code': '検証コード',
  'attr:vmfa_bind_code1': '確認コードの最初のセット',
  'attr:vmfa_bind_code2': '検証コードの2番目のセット',
  'attr:vmfa_bind_info_title': '認証情報',
  'attr:vmfa_bind_info_account': 'ユーザー名:',
  'attr:vmfa_bind_info_key': '鍵:',
  'attr:u2f_insert': 'U2FセキュリティキーをコンピューターのUSBポートに挿入します',
  'attr:u2f_click': 'U2Fセキュリティキーのボタンをクリックします',
  'attr:u2f_auth_title': '以下の手順に従って、U2Fセキュリティキーを確認してください',
  'attr:u2f_bind_title': '以下の手順に従って、U2Fセキュリティキーをバインドしてください',
  'attr:mfa_choose_vmfa': '仮想MFAデバイス',
  'attr:mfa_choose_u2f': 'U2Fセキュリティキー',
  'attr:mfa_show_secret': 'キーを表示',
  'attr:mfa_hide_secret': '隠しキー',
  'title:default': '安全性の検証',
  'title:sub:mfa:bind': '绑定 MFA 设备',
  'title:sub_vmfa_bind': '仮想MFAデバイスをバインドする',
  'title:sub_u2f_bind': 'U2Fセキュリティキーをバインドする',
  'title:sub_vmfa_auth': '仮想MFAデバイスを確認するe',
  'title:sub_u2f_auth': 'U2Fセキュリティキーを確認する',
  'title:sms_auth': '验证手机',
  'title:email_auth': '验证邮箱',
  'message:incorrect_mfa_bind': 'セキュリティ検証に失敗しました。もう一度やり直してください。',
  'message:incorrect_u2f_auth': 'U2Fセキュリティキーの確認に失敗しました。U2Fセキュリティキー情報を再度取得して、確認のために送信してください。',
  'message:get_u2f_key_params_error': 'U2Fセキュリティキーを取得するためのパラメータが間違っています。',
  'message:u2f_operation_fail_or_timeout': '获取 U2F 安全密钥操作超时或不被允许。',
  'message:u2f_get_key_fail': 'U2Fセキュリティキーの取得に失敗しました。再試行してください。',
  'message:u2f_browser_not_support': 'お使いのブラウザがU2Fセキュリティキーをサポートしていないか、ブラウザのバージョンが低すぎます。',
  'message:u2f_get_key_cancel': 'U2Fセキュリティキーの取得プロセスが終了しました。もう一度やり直してください。',
  'message:u2f_bind_get_key': 'U2Fセキュリティキーを待っています...',
  'message:u2f_bind_get_key_success': 'U2Fセキュリティキーを正常に取得します。',
  'message:vmfa_bind_step1': '最初のステップ：コードをスキャンしてバインドするか、手動でキーを入力します。',
  'message:vmfa_bind_step2': 'ステップ2：2セットのチェックコードを入力します。',
  'message:vmfa_input_error_tip': 'チェックコードは6桁である必要があります。',
  'message:vmfa_input_empty_tip': 'チェックコードを空にすることはできません。',
  'message:mfa_choose_vmfa': '携帯電話でMFAアプリケーションを準備する必要があります。',
  'message:mfa_choose_u2f': 'YubiKeyまたはその他の互換性のあるU2Fデバイス。',
  'message:mfa_choose_tip': 'サブユーザーは、機密性の高い操作を実行するときにセキュリティ検証を実行する必要があります。次の方法でMFAデバイスをバインドする必要があります。',
  'message:new_main_verify_error': 'セキュリティ検証サービスで不明なエラーが発生しました。再試行してください。',
  'message:sub_invalid_unsupported_{method}!html!lines': `システムは、検証メソッド <code>{method}</code> でエラーを検出しました。
  アカウントのセキュリティを保護するために、メインアカウントまたはRAM管理者に連絡して、RAMコンソールで確認方法を設定してください。`,
  'message:update_app_tip_{url}!html': 'MFA 認証コードをクイック入力し、アプリをアップグレードしてください。<a href="{url}" target="_blank">今すぐアップグレード</a>。',
  'message:invalid_unsupported_{method}!html': '確認方法 <code>{method}</code> が正しくありません。もう一度お試しください。',
  'message:invalid:sub:validator': '验证方式错误，请重试。'
};
