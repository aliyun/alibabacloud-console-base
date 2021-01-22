import update from 'immutability-helper';

import {
  EModalMode
} from '../../const';
import {
  IContextState
} from '../types';

export default function reduceChangeMode(state: IContextState, payload: EModalMode): IContextState {
  return update(state, {
    mode: {
      $set: payload
    }
  });
}
