import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDomBackdrop(state: IModelState, payload: HTMLOrSVGElement | null): IModelState {
  return update(state, {
    domBackdrop: {
      $set: payload
    }
  });
}
