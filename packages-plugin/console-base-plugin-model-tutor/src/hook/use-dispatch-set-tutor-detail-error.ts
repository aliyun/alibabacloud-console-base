import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';
import {
  IPayloadSetTutorDetailError
} from '../types';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetTutorDetailData(): (payload: IPayloadSetTutorDetailError) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IPayloadSetTutorDetailError): void => dispatch({
    type: EAction.SET_TUTOR_DETAIL_ERROR,
    payload
  }), [dispatch]);
}
