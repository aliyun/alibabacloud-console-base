import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDomTabBar(state: IModelState, payload: HTMLDivElement | null): IModelState {
  return update(state, {
    domTabBar: {
      $set: payload
    }
  });
}
