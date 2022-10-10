import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetOpenKey(state: IModelState, payload: string): IModelState {
  return update(state, {
    openKey: {
      $set: payload
    }
  });
}
