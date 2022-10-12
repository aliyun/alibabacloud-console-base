import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetActiveTabKey(state: IModelState, payload: string): IModelState {
  return update(state, {
    activeKey: {
      $set: payload
    }
  });
}
