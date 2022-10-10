import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';
import {
  IPayloadSetTutorDetailData
} from '../types';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetTutorDetailData(): (payload: IPayloadSetTutorDetailData) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IPayloadSetTutorDetailData): void => dispatch({
    type: EAction.SET_TUTOR_DETAIL_DATA,
    payload
  }), [dispatch]);
}
