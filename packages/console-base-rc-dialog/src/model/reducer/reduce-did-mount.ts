import update from 'immutability-helper';

import {
  IContextState
} from '../types';

export default function reduceDidMount(state: IContextState): IContextState {
  return update(state, {
    mounted: {
      $set: true
    }
  });
}
