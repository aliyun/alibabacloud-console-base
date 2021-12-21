import {
  useCallback
} from 'react';

import {
  IDialogPropsMutable,
  TDialogData
} from '../../types';
import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchUpdateProps<T = void, D = TDialogData>(): (payload: IDialogPropsMutable<T, D>) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IDialogPropsMutable<T, D>) => dispatch({
    type: EAction.UPDATE_PROPS,
    payload
  }), [dispatch]);
}
