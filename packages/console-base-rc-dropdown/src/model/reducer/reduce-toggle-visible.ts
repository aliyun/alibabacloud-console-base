import update from 'immutability-helper';

import {
  IContextState
} from '../types';

export default function reduceToggleVisible(state: IContextState, payload: boolean): IContextState {
  return update(state, {
    visible: {
      $set: payload
    }
  });
}
