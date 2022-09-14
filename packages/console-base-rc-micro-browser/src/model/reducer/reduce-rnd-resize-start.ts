import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceRndResizeStart(state: IModelState): IModelState {
  return update(state, {
    resizing: {
      $set: 0
    }
  });
}
