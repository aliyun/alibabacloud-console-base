import {
  useCallback
} from 'react';

import {
  EModalMode
} from '../../const';
import {
  actionChangeMode
} from '../action';

import useModelProps from './_use-model-props';
import useModelDispatch from './_use-model-dispatch';

export default function useDispatchChangeMode(): (mode: EModalMode) => void {
  const {
    onModeChange
  } = useModelProps();
  const dispatch = useModelDispatch();
  
  return useCallback((mode: EModalMode) => {
    dispatch(actionChangeMode(mode));
    onModeChange(mode);
  }, [dispatch, onModeChange]);
}
