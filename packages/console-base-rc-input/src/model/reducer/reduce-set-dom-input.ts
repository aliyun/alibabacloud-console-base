import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDomInput(state: IModelState, payload: HTMLInputElement | null): IModelState {
  return update(state, {
    domInput: {
      $set: payload
    }
  });
}
