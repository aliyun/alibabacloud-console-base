import {
  EChangeType
} from '../enum';

export interface IParamsChangeOrderCreate {
  type: EChangeType;
  info: { // 变更信息
    url: string;
    urlBase?: string;
    method: string;
    params?: unknown;
    body?: unknown;
  };
}

export interface IParamsChangeOrder {
  orderId: string;
  orderType: EChangeType;
  customCode?: string;
}
