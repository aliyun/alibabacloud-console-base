import update from 'immutability-helper';

import {
  IModelState
} from '../types';
import {
  DEFAULT_SIZE_AND_POSITION
} from '../const';

export default function reduceReset(state: IModelState): IModelState {
  return update(state, {
    $merge: DEFAULT_SIZE_AND_POSITION
  });
}
