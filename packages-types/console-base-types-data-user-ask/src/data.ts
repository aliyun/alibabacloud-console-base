import {
  IUserAskCategory
} from './common';

/**
 * 会话对象
 */
export interface IDataUserAskSession {
  /**
   * 排队或进行中的会话
   */
  sessionUrl: string;
  /**
   * 当前用户排队序号
   */
  queueNumber: number;
}

/**
 * 检查用户问服务状态
 */
export interface IDataUserAskCheckResult extends IDataUserAskSession {
  /**
   * 产品问题分类
   */
  categories: IUserAskCategory[];
}