import {
  IDataUserDialogueInit,
  IDataUserDialogue
} from './data';

/**
 * 初始化 - 条件检查以及获取一些前置数据
 */
export interface IApiDataUserDialogueInit {
  (productId: string): Promise<IDataUserDialogueInit>;
}

/**
 * 获取特定产品的未读消息数
 */
export interface IApiDataUserDialogueUnread {
  (productId: string): Promise<number>;
}

/**
 * 获取会话：若存在，则返回已有会话；不存在，发起新会话
 * 用于创建和轮询排队
 */
export interface IApiDataUserDialogue {
  (productId: string, categoryId: string): Promise<IDataUserDialogue>;
}

/**
 * 取消排队
 */
export interface IApiDataUserDialogueCancelQueue {
  (productId: string, categoryId: string): Promise<void>;
}