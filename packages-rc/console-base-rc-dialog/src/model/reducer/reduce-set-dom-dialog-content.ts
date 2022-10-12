import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDomDialogContent(state: IModelState, payload: HTMLDivElement | null): IModelState {
  return update(state, {
    domDialogContent: {
      $set: payload
    }
  });
}
