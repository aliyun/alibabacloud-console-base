export enum EAction {
  SET_TUTOR_DETAIL_LOADING,
  SET_TUTOR_DETAIL_DATA,
  SET_TUTOR_DETAIL_ERROR,
  SET_OPEN_KEY,
  SET_STEP,
  SET_FEEDBACK_RATED,
  SET_FEEDBACK_COMMENTED
}

export enum ESlsTopic {
  TUTOR_NOT_FOUND = 'tutor_not_found',
  OPEN = 'open',
  CLOSE = 'close',
  ATTENTION = 'attention',
  ATTENTION_FAILED = 'attention_failed',
  ACTION = 'action',
  STEP = 'step',
  FEEDBACK_RATE = 'feedback_rate',
  FEEDBACK_COMMENT = 'feedback_comment'
}