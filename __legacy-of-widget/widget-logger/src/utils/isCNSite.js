import getCookieItem from './getCookieItem'

export default function isCNSite() {
  try {
    // OneConsole
    if (window.ALIYUN_CONSOLE_CONFIG.CHANNEL === 'OFFICIAL') {
      return true
    }
  } catch (e) {
    // do nothing
  }

  try {
    // ECS
    if (window.ALIYUN_ECS_CONSOLE_CONFIG.channel === 'OFFICIAL') {
      return true
    }
  } catch (e) {
    // do nothing
  }

  try {
    // Rest
    if (getCookieItem('aliyun_site') === 'CN') {
      return true
    }
  } catch (e) {
    // do nothing
  }

  return false
}
