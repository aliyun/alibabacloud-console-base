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
  
  'op:previous_step': '前',
  'op:retry': 'リトライ',
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
  'title:main': '安全性の検証',
  'title:sub_vmfa_bind': '仮想MFAデバイスをバインドする',
  'title:sub_u2f_bind': 'U2Fセキュリティキーをバインドする',
  'title:sub_vmfa_auth': '仮想MFAデバイスを確認するe',
  'title:sub_u2f_auth': 'U2Fセキュリティキーを確認する',
  'title:sub_default': 'サブユーザーのセキュリティ検証',
  'message:incorrect_u2f_bind': 'セキュリティ検証に失敗しました。もう一度やり直してください。',
  'message:incorrect_u2f_auth': 'U2Fセキュリティキーの確認に失敗しました。U2Fセキュリティキー情報を再度取得して、確認のために送信してください。',
  'message:u2f_get_key_fail': 'U2Fセキュリティキーの取得に失敗しました。再試行してください。',
  'message:u2f_get_key_timeout': 'U2Fセキュリティキーの取得がタイムアウトしました。もう一度やり直してください。',
  'message:u2f_browser_not_support': 'お使いのブラウザがU2Fセキュリティキーをサポートしていないか、ブラウザのバージョンが低すぎます。',
  'message:u2f_http_not_support': 'HTTPプロトコルに基づくページは、U2Fセキュリティキーをサポートしていません。',
  'message:u2f_bind_confirm_tip': 'ブラウザにU2Fセキュリティキーのブランドとタイプの表示を許可しますか？',
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
  アカウントのセキュリティを保護するために、メインアカウントまたはRAM管理者に連絡して、RAMコンソールで確認方法を設定してください。`
};
