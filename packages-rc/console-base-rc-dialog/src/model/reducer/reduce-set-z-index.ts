import update from 'immutability-helper';

import {
  IModelState
} from '../types';

/**
 * 修改 zIndex
 */
export default function reduceSetZIndex(state: IModelState, payload: number): IModelState {
  return update(state, {
    zIndex: {
      $set: payload
    }
  });
}
