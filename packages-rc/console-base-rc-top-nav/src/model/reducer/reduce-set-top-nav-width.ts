import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetTopNavWidth(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    dockLogoState: {
      $set: payload
    }
  });
}