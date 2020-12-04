import {
  useCallback
} from 'react';

import {
  IPropsTab
} from '../../types';
import {
  actionActivateTab
} from '../action';

import useModelProps from './_use-model-props';
import useModelDispatch from './_use-model-dispatch';

export default function useDispatchActivateTab(): (tab: IPropsTab) => void {
  const {
    onTabActivate
  } = useModelProps();
  const dispatch = useModelDispatch();
  
  return useCallback((tab: IPropsTab): void => {
    dispatch(actionActivateTab(tab));
    
    onTabActivate(tab);
  }, [dispatch, onTabActivate]);
}
