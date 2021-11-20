import {
  useCallback
} from 'react';

import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetDomBackdrop(): (payload: HTMLDivElement | null) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: HTMLDivElement | null): void => dispatch({
    type: EAction.SET_DOM_BACKDROP,
    payload
  }), [dispatch]);
}
