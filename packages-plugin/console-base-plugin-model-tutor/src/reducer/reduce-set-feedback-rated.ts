import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetFeedbackRated(state: IModelState, [docId, useful]: [string, boolean]): IModelState {
  return update(state, {
    feedbackRated: {
      $merge: {
        [docId]: useful
      }
    }
  });
}
