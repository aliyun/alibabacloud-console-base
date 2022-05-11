import update from 'immutability-helper';

import {
  IRect,
  IModelState
} from '../types';

export default function reduceSetRectStyle(state: IModelState, payload: IRect): IModelState {
  return update(state, {
    rectStyle: {
      $merge: payload
    }
  });
}
