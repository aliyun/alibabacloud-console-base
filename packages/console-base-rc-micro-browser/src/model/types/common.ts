import {
  EModalMode
} from '../enum';

export interface IRndStateRect {
  w: number;
  h: number;
  x: number;
  y: number;
}

export interface IRndStateExtra {
  mode: EModalMode;
  visible: boolean;
  moving: boolean;
  zIndex: number;
  minWidth: number;
  minHeight: number;
}