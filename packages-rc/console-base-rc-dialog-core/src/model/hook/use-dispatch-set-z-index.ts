import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function useDispatchSetZIndex(): (payload: number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: number) => dispatch({
    type: EAction.SET_Z_INDEX,
    payload
  }), [dispatch]);
}
