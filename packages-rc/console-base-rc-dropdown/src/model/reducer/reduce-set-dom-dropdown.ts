import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDomDropdown(state: IModelState, payload: HTMLDivElement | null): IModelState {
  return update(state, {
    domDropdown: {
      $set: payload
    }
  });
}
