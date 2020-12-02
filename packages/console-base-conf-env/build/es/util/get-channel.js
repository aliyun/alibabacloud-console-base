import ONE_CONF from '@alicloud/console-one-config';

function getFallbackChannel(site) {
  switch (site) {
    case 'INTL':
      return 'SIN';

    case 'JP':
      return 'JP';

    case 'CN':
      return 'OFFICIAL';

    default:
      return site;
  }
}

export default function getChannel(site) {
  var _ref = window,
      ALIYUN_ECS_CONSOLE_CONFIG = _ref.ALIYUN_ECS_CONSOLE_CONFIG;
  var channel = '';

  if (ONE_CONF.ONE) {
    // OneConsole 的场景
    channel = ONE_CONF.CHANNEL;
  } else if (ALIYUN_ECS_CONSOLE_CONFIG) {
    // ECS 不是 OneConsole 但，是大头，需要兼容一下
    channel = ALIYUN_ECS_CONSOLE_CONFIG.channel;
  }

  return channel || getFallbackChannel(site);
}