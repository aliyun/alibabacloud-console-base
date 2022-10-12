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
  
  return update(state, {
    $merge: {
      viewportW: viewport.width,
      viewportH: viewport.height
    }
  });
}
