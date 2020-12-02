export default function getChannelLinkList() {
  try {
    return window.ALIYUN_CONSOLE_CONFIG.CHANNEL_LINKS
  } catch (e) {
    return {}
  }
}
