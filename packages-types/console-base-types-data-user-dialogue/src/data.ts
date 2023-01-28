import {
  IUserDialogueCategory
} from './common';

/**
 * 初始化对象
 */
export interface IDataUserDialogueInit {
  /**
   * url 对应的问题分类 ID
   */
  categoryId: string;
  /**
   * 对话 URL
   */
  url: string;
  /**
   * 当前用户排队序号，若大于 0 则 url 必为空
   */
  queueNumber: number;
  /**
   * 产品问题分类
   */
  categories: IUserDialogueCategory[];
}

/**
 * 对话对象
 */
export interface IDataUserDialogue extends Omit<IDataUserDialogueInit, 'categories'> {}