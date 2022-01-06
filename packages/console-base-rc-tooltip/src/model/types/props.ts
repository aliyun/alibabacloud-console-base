import {
  IPropsRcTooltip
} from '../../types';

export interface IModelProps extends IPropsRcTooltip {
  trigger?: HTMLElement | null;
  triggerType?: 'click' | 'hover';
  onVisibleChange?(visible: boolean): void;
}