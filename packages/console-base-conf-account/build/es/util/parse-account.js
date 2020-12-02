import { getCookie } from '@alicloud/cookie';
import ONE_CONF from '@alicloud/console-one-config';
import { EAccountType } from '../enum';

/**
 * 拿到账号相关的信息，注意可能不准，所以除了埋点相关，不要做任何其他有用途
 */
export default function parseAccount() {
  var _ref = window,
      ALIYUN_ECS_CONSOLE_CONFIG = _ref.ALIYUN_ECS_CONSOLE_CONFIG;
  var userId = ''; // 当前登录用户 ID

  var userIdMain = ''; // 当前登录用户（如果是子账号）的主账号的 ID，如果当前登录是主账号，则直接跟 userId 一样

  var userType = EAccountType.MAIN; // 用户类型
  // 预先从控制台自己的配置项中拿主子账号的 ID，因为 cookie 不靠谱

  if (ONE_CONF.ONE) {
    // OneConsole 的场景
    userId = ONE_CONF.ACCOUNT.ID;
    userIdMain = ONE_CONF.ACCOUNT.ID_MAIN;
    userType = ONE_CONF.ACCOUNT.TYPE; // 可以兼容...
  } else if (ALIYUN_ECS_CONSOLE_CONFIG) {
    // ECS 不是 OneConsole 但是大头，需要兼容一下
    userId = ALIYUN_ECS_CONSOLE_CONFIG.CURRENT_PK;
    userIdMain = ALIYUN_ECS_CONSOLE_CONFIG.MASTER_PK;

    if (ALIYUN_ECS_CONSOLE_CONFIG.isChildAccount) {
      userType = EAccountType.RAM;
    } else if (ALIYUN_ECS_CONSOLE_CONFIG.isRoleAccount) {
      userType = EAccountType.STS;
    }
  }
  /*
   * 我告诉你为什么 cookie 不靠谱：
   * 1. 主账号没有问题
   * 2. 子账号一般没有这个 cookie，但是！！如果你先登录主账号再登录子账号...却可以拿到，这种场景下..就会不准
   */


  if (!userId) {
    userId = getCookie('login_aliyunid_pk') || '';

    if (!userId) {
      userType = EAccountType.RAM; // 不准
    }
  }

  return {
    ID: userId,
    ID_MAIN: userIdMain || userId,
    TYPE: userType
  };
}