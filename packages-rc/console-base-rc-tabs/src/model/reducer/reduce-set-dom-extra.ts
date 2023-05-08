import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDomExtra(state: IModelState, payload: HTMLDivElement | null): IModelState {
  return update(state, {
    domExtra: {
      $set: payload
    }
  });
}
