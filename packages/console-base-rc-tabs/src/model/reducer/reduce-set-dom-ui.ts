import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDomUi(state: IModelState, payload: HTMLDivElement | null): IModelState {
  return update(state, {
    domUi: {
      $set: payload
    }
  });
}
