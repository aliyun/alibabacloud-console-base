import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetDomTabList(): (payload: HTMLUListElement | null) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: HTMLUListElement | null): void => dispatch({
    type: EAction.SET_DOM_TAB_LIST,
    payload
  }), [dispatch]);
}
