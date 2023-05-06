import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDomTabList(state: IModelState, payload: HTMLUListElement | null): IModelState {
  return update(state, {
    domTabList: {
      $set: payload
    }
  });
}
