import update from 'immutability-helper';

import {
  IContextState
} from '../types';

export default function reduceRndResizeStart(state: IContextState): IContextState {
  return update(state, {
    resizing: {
      $set: 0
    }
  });
}
