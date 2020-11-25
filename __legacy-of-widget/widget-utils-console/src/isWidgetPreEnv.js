/**
 * This method should support customizing for diffrent portal.
 */

function isWidgetPreEnv() {
  // First, examinate the pre env of OneConsole
  try {
    if (window.ALIYUN_CONSOLE_CONFIG.fEnv === 'pre') {
      return true
    }
  } catch (e) {
    // do nothing
  }
  // Second, examinate the pre env of Widget Release.json
  try {
    if (window.__ALIYUN_WIDGET_STORE__.inWidgetPreEnv === true) {
      return true
    }
  } catch (e) {
    // do nothing
  }
  return false
}

export default isWidgetPreEnv
