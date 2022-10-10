import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetTutorDetailLoading from './reduce-set-tutor-detail-loading';
import reduceSetTutorDetailData from './reduce-set-tutor-detail-data';
import reduceSetTutorDetailError from './reduce-set-tutor-detail-error';
import reduceSetOpenKey from './reduce-set-open-key';
import reduceSetStep from './reduce-set-step';
import reduceSetFeedbackRated from './reduce-set-feedback-rated';
import reduceSetFeedbackCommented from './reduce-set-feedback-commented';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_TUTOR_DETAIL_LOADING:
      return reduceSetTutorDetailLoading(state, action.payload);
    case EAction.SET_TUTOR_DETAIL_DATA:
      return reduceSetTutorDetailData(state, action.payload);
    case EAction.SET_TUTOR_DETAIL_ERROR:
      return reduceSetTutorDetailError(state, action.payload);
    case EAction.SET_OPEN_KEY:
      return reduceSetOpenKey(state, action.payload);
    case EAction.SET_STEP:
      return reduceSetStep(state, action.payload);
    case EAction.SET_FEEDBACK_RATED:
      return reduceSetFeedbackRated(state, action.payload);
    case EAction.SET_FEEDBACK_COMMENTED:
      return reduceSetFeedbackCommented(state, action.payload);
    default:
      return state;
  }
}
