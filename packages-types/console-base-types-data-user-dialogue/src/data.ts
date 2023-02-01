import {
  IDialogueCategory
} from './common';

interface IDataDialogueShared {
  /**
   * 对话 URL
   */
  url: string;
  /**
   * url 对应的问题分类 ID
   */
  categoryId: string;
  /**
   * 当前用户排队序号，若大于 0 则 url 必为空
   */
  queueNumber: number;
}

/**
 * 初始化对象
 */
export interface IDataDialogueInit extends IDataDialogueShared {
  /**
   * 产品名称可能需要用于展示
   */
  productName: string;
  /**
   * 每周服务日范围
   */
  dayScope: [number, number]; // 1 = 周一，7 = 周日
  /**
   * 每日服务时间范围
   */
  timeScope: [string, string]; // e.g. ['10:00', '17:30']
  /**
   * 当前不在服务时间，可以判断是否有 url，有则表示可以查看历史记录，没有则表示从未发起过文档，流程结束
   */
  notServiceTime: boolean;
  /**
   * 产品问题分类
   */
  categories: IDialogueCategory[];
}

/**
 * 对话对象
 */
export interface IDataDialogue extends IDataDialogueShared {}