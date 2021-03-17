import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceDidMount(state: IModelState): IModelState {
  return update(state, {
    mounted: {
      $set: true
    }
  });
}
