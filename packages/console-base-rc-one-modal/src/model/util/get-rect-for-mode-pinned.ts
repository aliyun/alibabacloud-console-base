import {
  IModelState,
  IRndStateRect
} from '../types';

export default function getRectForModePinned({
  x2,
  y2,
  windowScrollbarWidth,
  pinnedWidth
}: IModelState, propPinnedWidth: number): IRndStateRect {
  const w = Math.min(pinnedWidth > 0 ? pinnedWidth : propPinnedWidth, x2);
  
  return {
    w,
    h: y2,
    x: (x2 > w ? x2 - w : 0) - windowScrollbarWidth,
    y: 0
  };
}