export default {
  'op:close': '閉じる',
  'op:cancel': 'キャンセル',
  'op:sign_in': 'サインイン',
  'op:reload_page': 'ページをリロード',
  'title:normal': 'エラープロンプト',
  'title:session_timeout': 'セッションタイムアウト',
  'title:token_expired': '期限切れのトークン',
  'title:api_not_exist': 'インターフェースが存在しません',
  'title:access_denied': '権限がない',
  'message:sign_in': '現在のセッションがタイムアウトした、ログインしてください。',
  'message:token_expired': '現在のトークンの有効期限が切れています。ページをリロードしてください。',
  'message:access_denied_1': `{key, select,
    ImplicitDeny {この操作を行うことはできません。}
    ExplicitDeny {この操作を行うことは明示的に拒否されます。}
    other {key}
  }`,
  'message:access_denied_2': `{key, select,
    ControlPolicy {リソースディレクトリの管理者に連絡して、コントロールポリシーを確認してください。}
    other {RAM による権限付与は、アカウント管理者にお問い合わせください。}
  }`,
  'message:api_not_exist': '要求されたインタフェースは、してください接触アリババクラウド顧客サービスは存在しません。'
};
