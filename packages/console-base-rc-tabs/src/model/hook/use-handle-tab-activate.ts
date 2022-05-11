import {
  useCallback
} from 'react';

import {
  IModelPropsTab
} from '../types';

import useModelProps from './_use-model-props';
import useDispatchSetActiveTabKey from './use-dispatch-set-active-tab-key';

export default function useHandleTabActivate(): (tab: IModelPropsTab | null) => void {
  const {
    onChange
  } = useModelProps();
  const dispatchSetActiveTabKey = useDispatchSetActiveTabKey();
  
  return useCallback((tab: IModelPropsTab | null): void => {
    const activeKey = tab ? tab.key : '';
    
    dispatchSetActiveTabKey(activeKey);
    onChange?.(activeKey);
  }, [dispatchSetActiveTabKey, onChange]);
}
