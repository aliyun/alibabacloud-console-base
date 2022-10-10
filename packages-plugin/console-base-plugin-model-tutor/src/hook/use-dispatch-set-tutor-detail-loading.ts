import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';
import {
  IPayloadSetTutorDetailLoading
} from '../types';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetTutorDetailLoading(): (payload: IPayloadSetTutorDetailLoading) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IPayloadSetTutorDetailLoading): void => dispatch({
    type: EAction.SET_TUTOR_DETAIL_LOADING,
    payload
  }), [dispatch]);
}
