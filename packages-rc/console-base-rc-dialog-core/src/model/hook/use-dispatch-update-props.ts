import {
  useCallback
} from 'react';

import {
  IDialogPropsMutable
} from '../types';
import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchUpdateProps<T = void, D extends object = Record<string, unknown>>(): (payload: IDialogPropsMutable<T, D>) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IDialogPropsMutable<T, D>) => dispatch({
    type: EAction.UPDATE_PROPS,
    payload
  }), [dispatch]);
}
