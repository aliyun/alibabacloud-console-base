import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetDomBackdrop(): (payload: HTMLOrSVGElement | null) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: HTMLOrSVGElement | null): void => dispatch({
    type: EAction.SET_DOM_BACKDROP,
    payload
  }), [dispatch]);
}
