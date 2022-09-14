import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceRndDragStart(state: IModelState): IModelState {
  return update(state, {
    dragging: {
      $set: true
    }
  });
}
