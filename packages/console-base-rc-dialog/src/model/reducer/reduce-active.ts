import update from 'immutability-helper';

import {
  IContextState
} from '../types';

/**
 * 用于触发 CSS 动画
 */
export default function reduceActive(state: IContextState, payload: boolean): IContextState {
  return update(state, {
    active: {
      $set: payload
    }
  });
}
