import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceToggleVisible(state: IModelState): IModelState {
  return update(state, {
    visible: {
      $set: !state.visible
    }
  });
}
