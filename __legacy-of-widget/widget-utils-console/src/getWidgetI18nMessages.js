export default function getWidgetI18nMessages() {
  try {
    return window.ALIYUN_CONSOLE_I18N_MESSAGE
  } catch (e) {
    return {}
  }
}
