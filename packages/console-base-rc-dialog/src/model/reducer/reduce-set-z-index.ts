import update from 'immutability-helper';

import {
  IContextState
} from '../types';

/**
 * 修改 zIndex
 */
export default function reduceSetZIndex(state: IContextState, payload: number): IContextState {
  return update(state, {
    zIndex: {
      $set: payload
    }
  });
}
