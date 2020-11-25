function isOneConsole() {
  try {
    if (window.ALIYUN_CONSOLE_CONFIG.portalType === 'one') {
      return true
    }
    return false
  } catch (e) {
    return false
  }
}

export default isOneConsole
