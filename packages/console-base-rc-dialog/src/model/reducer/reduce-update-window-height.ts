import update from 'immutability-helper';

import {
  IContextState
} from '../types';

export default function reduceUpdateWindowHeight(state: IContextState): IContextState {
  return update(state, {
    windowHeight: {
      $set: window.innerHeight
    }
  });
}
