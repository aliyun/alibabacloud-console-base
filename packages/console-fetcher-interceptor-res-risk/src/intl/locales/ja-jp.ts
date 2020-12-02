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
  'message:no_get_code_url': '確認コードのURLが設定されていないことを確認し、開発に連絡してください。'
};
