import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDomDialog(state: IModelState, payload: HTMLDivElement | null): IModelState {
  return update(state, {
    domDialog: {
      $set: payload
    }
  });
}
