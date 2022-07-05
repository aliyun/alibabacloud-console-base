import update from 'immutability-helper';

import {
  IAttentionRect,
  IModelState
} from '../types';

export default function reduceSetRectStyle(state: IModelState, payload: IAttentionRect): IModelState {
  return update(state, {
    attentionRect: {
      $merge: payload
    }
  });
}
