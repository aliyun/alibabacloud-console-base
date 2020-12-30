import update from 'immutability-helper';

import {
  IContextState
} from '../types';

export default function reduceRndDragStart(state: IContextState): IContextState {
  return update(state, {
    dragging: {
      $set: true
    }
  });
}
