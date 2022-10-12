import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetFocused(): (payload: HTMLInputElement | null) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: HTMLInputElement | null): void => dispatch({
    type: EAction.SET_DOM_INPUT,
    payload
  }), [dispatch]);
}
