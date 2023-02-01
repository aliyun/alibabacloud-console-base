import {
  IDataDialogueInit,
  IDataDialogue
} from './data';

/**
 * 初始化 - 条件检查以及获取一些前置数据
 */
export interface IApiDataDialogueInit {
  (productId: string): Promise<IDataDialogueInit>;
}

/**
 * 获取特定产品的未读消息数
 */
export interface IApiDataDialogueUnread {
  (productId: string): Promise<number>;
}

/**
 * 开始对话
 */
export interface IApiDataDialogueStart {
  (productId: string, categoryId: string): Promise<IDataDialogue>;
}

/**
 * 获取会话，用于轮询排队
 */
export interface IApiDataDialogue {
  (productId: string, categoryId: string): Promise<IDataDialogue>;
}

/**
 * 取消排队
 */
export interface IApiDataDialogueCancel {
  (productId: string, categoryId: string): Promise<void>;
}