import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetHovered(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    hovered: {
      $set: payload
    }
  });
}
