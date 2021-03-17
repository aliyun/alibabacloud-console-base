import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceUpdateWindowHeight(state: IModelState): IModelState {
  return update(state, {
    windowHeight: {
      $set: window.innerHeight
    }
  });
}
