import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceActivateTab(state: IModelState, payload: string | number): IModelState {
  return update(state, {
    activeKey: {
      $set: payload
    }
  });
}
