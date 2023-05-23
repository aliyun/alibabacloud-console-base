import update from 'immutability-helper';

import {
  IModelState
} from '../types';

/**
 * 用于触发 CSS 动画 TODO 用 transition-group
 */
export default function reduceSetActive(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    active: {
      $set: payload
    }
  });
}
