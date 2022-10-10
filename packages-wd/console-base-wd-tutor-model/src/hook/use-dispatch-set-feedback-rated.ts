import {
  useCallback
} from 'react';
  
import {
  EAction
} from '../enum';
  
import useModelDispatch from './_use-model-dispatch';
  
export default function useDispatchSetFeedbackRated(): (payload: [string, boolean]) => void {
  const dispatch = useModelDispatch();
    
  return useCallback((payload: [string, boolean]) => dispatch({
    type: EAction.SET_FEEDBACK_RATED,
    payload
  }), [dispatch]);
}