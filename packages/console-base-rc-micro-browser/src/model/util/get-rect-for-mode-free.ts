import {
  IModelState,
  IRndStateRect
} from '../types';

export default function getRectForModeFree({
  x,
  y,
  x1,
  y1
}: IModelState): IRndStateRect {
  return {
    w: x1 - x,
    h: y1 - y,
    x: x > 0 ? x : 0,
    y: y > 0 ? y : 0
  };
}