import {
  useCallback
} from 'react';

import {
  IPropsTab
} from '../../types';
import {
  actionCloseTab
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchCloseTab(): (tab: IPropsTab) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((tab: IPropsTab): void => dispatch(actionCloseTab(tab)), [dispatch]);
}
