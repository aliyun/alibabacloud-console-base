import {
  IUserDialogueCategory
} from './common';

/**
 * 对话对象
 */
export interface IDataUserDialogue {
  /**
   * 对话 URL
   */
  url: string;
  /**
   * 当前用户排队序号
   */
  queueNumber: number;
}

/**
 * 检查用户问服务状态
 */
export interface IDataUserDialogueCheck extends IDataUserDialogue {
  /**
   * 产品问题分类
   */
  categories: IUserDialogueCategory[];
}