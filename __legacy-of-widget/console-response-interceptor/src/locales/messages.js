const messages = {
  'zh-CN': {
    title: '系统错误',
    ok: '确定',
  },
  'en-US': {
    title: 'Error',
    ok: 'OK',
  },
  'ja-JP': {
    title: 'システムエラー',
    ok: 'OK',
  },
  'zh-TW': {
    title: '系統錯誤',
    ok: '確定',
  },
  'zh-HK': {
    title: '系統錯誤',
    ok: '確定',
  },
}

export default (locale = 'en-US') => messages[locale]
