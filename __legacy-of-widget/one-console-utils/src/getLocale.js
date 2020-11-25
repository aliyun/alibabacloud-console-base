import getCookieItem from './getCookieItem'
import getConsoleConfig from './getConsoleConfig'

export const LOCALE = 'LOCALE'

function getLocaleFromCookie() {
  const lang2LocaleMap = {
    zh: 'zh-CN',
    en: 'en-US',
    ja: 'ja-JP',
    hk: 'zh-HK',
  }

  try {
    const lang = getCookieItem('aliyun_lang')
    return lang2LocaleMap[lang]
  } catch (e) {
    return lang2LocaleMap.en
  }
}

export default () => {
  let locale
  try {
    // try to get it from one-console
    locale = getConsoleConfig(LOCALE)
  } catch (e) {
    // do nothing
  }
  return locale || getLocaleFromCookie()
}
