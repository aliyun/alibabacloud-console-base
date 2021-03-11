import {
  useCallback
} from 'react';

import {
  EModalMode
} from '../../const';
import {
  actionChangeMode
} from '../action';

import useModelDispatch from './_use-model-dispatch';
import useProps from './use-props';

export default function useDispatchChangeMode(): (mode: EModalMode) => void {
  const {
    onModeChange
  } = useProps();
  const dispatch = useModelDispatch();
  
  return useCallback((mode: EModalMode) => {
    dispatch(actionChangeMode(mode));
    
    if (onModeChange) {
      onModeChange(mode);
    }
  }, [dispatch, onModeChange]);
}
