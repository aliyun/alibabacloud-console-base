import update from 'immutability-helper';

import {
  IModelState
} from '../types';
import {
  getWindowSize
} from '../util';

/**
 * 浏览器窗口缩放的时候保持右下角位置不变、且大小不变
 */
export default function reduceRefreshWindowSize(state: IModelState): IModelState {
  const [W, H] = getWindowSize();
  const {
    x,
    y,
    x1,
    y1,
    x2,
    y2
  } = state;
  const deltaX = W - x2;
  const deltaY = H - y2;
  
  return update(state, {
    $merge: {
      x: x + deltaX,
      y: y + deltaY,
      x1: x1 + deltaX,
      y1: y1 + deltaY,
      x2: W,
      y2: H
    }
  });
}
