import {
  BlockReason
} from '../data';

export interface IFetcherInterceptorConfig {
  urlOrderCreate?: string;
}

export interface IErrorData {
  customCode?: string; // 如果允许填入自定义变更单 ID，则需返回该值
  reason?: BlockReason;
}

/**
 * 业务接口再次提交的时候，需要带上审批单信息
 */
export interface IExtraParams {
  _message_: string;
  _orderId_: string;
  _orderType_: 'cm' | 'cf';
  _orderCustomCode_: string; // 当用户填自定义审批单是时候需要
}
