import {
  EBlockReason,
  EChangeOrderStatus
} from '../enum';

export interface IData0ChangeOrder {
  orderId: string; // 变更单系统的 ID，一切交互基于它
  reason: EBlockReason;
  type: 'cm' | 'cf';
  url: string; // 变更系统对应的 URL
  status: EChangeOrderStatus;
  timeCreated: number;
  timeModified: number;
}
