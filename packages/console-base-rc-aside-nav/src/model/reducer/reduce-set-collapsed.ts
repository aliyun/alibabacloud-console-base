import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetCollapsed(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    collapsed: {
      $set: payload
    }
  });
}
