import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDomNav(state: IModelState, payload: HTMLDivElement | null): IModelState {
  return update(state, {
    domNav: {
      $set: payload
    }
  });
}
