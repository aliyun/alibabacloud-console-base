import update from 'immutability-helper';

import {
  getViewport
} from '@alicloud/mere-dom';

import {
  IModelState
} from '../types';

/**
 * 浏览器窗口缩放的时候保持右下角位置不变、且大小不变
 */
export default function reduceRefreshWindowSize(state: IModelState): IModelState {
  const viewport = getViewport();
  const {
    x1,
    y1,
    x2,
    y2
  } = state;
  const deltaX = viewport.width - x2;
  const deltaY = viewport.height - y2;
  
  return update(state, {
    $merge: {
      x1: x1 + deltaX,
      y1: y1 + deltaY,
      x2: viewport.width,
      y2: viewport.height
    }
  });
}
