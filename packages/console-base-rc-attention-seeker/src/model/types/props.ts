import {
  IAttentionSeekerItem,
  TCloseSource
} from './common';

export interface IModelProps {
  items: IAttentionSeekerItem[];
  timestamp?: number; // 用于强制 refresh
  onClose?(source: TCloseSource): void;
}