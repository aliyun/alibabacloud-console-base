import update from 'immutability-helper';

import {
  IAttentionSeekerRect,
  IModelState
} from '../types';

export default function reduceSetRectStyle(state: IModelState, payload: IAttentionSeekerRect): IModelState {
  return update(state, {
    rectStyle: {
      $merge: payload
    }
  });
}
