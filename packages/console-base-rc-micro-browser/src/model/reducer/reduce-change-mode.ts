import update from 'immutability-helper';

import {
  EMicroBrowserMode
} from '../enum';
import {
  IModelState
} from '../types';

export default function reduceChangeMode(state: IModelState, payload: EMicroBrowserMode): IModelState {
  return update(state, {
    mode: {
      $set: payload
    }
  });
}
