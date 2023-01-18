import {
  IDataUserAskCheckResult,
  IDataUserAskSession
} from './data';

/**
 * 条件检查以及获取一些前置数据
 */
export interface IApiDataUserAskCheck {
  (productId: string): Promise<IDataUserAskCheckResult>;
}

/**
 * 获取特定产品的未读消息数
 */
export interface IApiDataUserAskUnread {
  (productId: string): Promise<number>;
}

/**
 * 取消排队
 */
export interface IApiDataUserAskSessionCancel {
  (productId: string, categoryId: string): Promise<void>;
}

/**
 * 获取会话：若存在，则返回已有会话；不存在，发起新会话
 * 用于创建和轮询排队
 */
export interface IApiDataUserAskSessionGet {
  (productId: string, categoryId: string): Promise<IDataUserAskSession>;
}