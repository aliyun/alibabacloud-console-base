import {
  IAttentionSeeker,
  TCloseSource
} from './common';

export interface IModelProps {
  items: IAttentionSeeker[];
  onClose?(source: TCloseSource): void;
}