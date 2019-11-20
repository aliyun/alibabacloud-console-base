export default function getChannelFeatureList() {
  try {
    return window.ALIYUN_CONSOLE_CONFIG.CHANNEL_FEATURE_STATUS
  } catch(e) {
    return {}
  }
}
