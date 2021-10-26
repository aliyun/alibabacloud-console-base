import {
  EModalMode
} from '../const';

export interface IPayloadDrag {
  x: number;
  y: number;
}

export interface IPayloadResize {
  mode: EModalMode; // 当前所处模式
  x: number;
  y: number;
  w: number;
  h: number;
  stopped?: boolean;
}