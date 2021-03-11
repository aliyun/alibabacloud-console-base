import update from 'immutability-helper';

import {
  EModalMode
} from '../../const';
import {
  IModelState
} from '../types';

export default function reduceChangeMode(state: IModelState, payload: EModalMode): IModelState {
  return update(state, {
    mode: {
      $set: payload
    }
  });
}
