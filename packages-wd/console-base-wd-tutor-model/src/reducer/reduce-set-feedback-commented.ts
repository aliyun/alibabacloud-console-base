import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetFeedbackCommented(state: IModelState, payload: string): IModelState {
  return update(state, {
    feedbackCommented: {
      $merge: {
        [payload]: true
      }
    }
  });
}
