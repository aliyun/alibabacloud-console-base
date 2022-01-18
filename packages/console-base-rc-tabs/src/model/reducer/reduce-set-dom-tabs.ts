import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDomTabs(state: IModelState, payload: HTMLDivElement | null): IModelState {
  return update(state, {
    domTabs: {
      $set: payload
    }
  });
}
