import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDomDrop(state: IModelState, payload: HTMLDivElement | null): IModelState {
  return update(state, {
    domDrop: {
      $set: payload
    }
  });
}
