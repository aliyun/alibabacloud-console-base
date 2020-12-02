import {
  EAccountType
} from '../enum';

export interface IWin extends Window { // 从 cookie 中获取用户数据非常不靠谱，这里通过对 OneConsole 和 ECS 配置项进行覆盖得以保证 80% 的准确性
  ALIYUN_ECS_CONSOLE_CONFIG?: {
    CURRENT_PK: string;
    MASTER_PK: string;
    isChildAccount: boolean;
    isRoleAccount: boolean;
  };
}

export interface IConfAccount { // 不准拿用户名
  ID: string; // 当前登录用户数字 ID
  ID_MAIN: string; // 当前登录用户主账号的数字 ID（如果是主账号，则等于 id）
  TYPE: EAccountType;
}
