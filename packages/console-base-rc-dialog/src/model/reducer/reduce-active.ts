import update from 'immutability-helper';

import {
  IModelState
} from '../types';

/**
 * 用于触发 CSS 动画
 */
export default function reduceActive(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    active: {
      $set: payload
    }
  });
}
