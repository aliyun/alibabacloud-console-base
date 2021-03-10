import {
  useCallback
} from 'react';

import {
  IPropsTab
} from '../../types';
import {
  actionCloseTab
} from '../action';

import useModelProps from './_use-model-props';
import useModelDispatch from './_use-model-dispatch';
import useTabs from './use-tabs';
import useActiveTab from './use-active-tab';
import useDispatchActivateTab from './use-dispatch-activate-tab';

export default function useDispatchCloseTab(): (tab: IPropsTab) => void {
  const {
    onTabClose
  } = useModelProps();
  const dispatch = useModelDispatch();
  const tabs = useTabs();
  const activeTab = useActiveTab();
  const dispatchActivateTab = useDispatchActivateTab();
  
  return useCallback((tab: IPropsTab): void => {
    let nextActiveTab: IPropsTab | undefined;
    
    if (activeTab === tab) { // 关闭当前选中 tab，需要指定下一个选中 tab
      const index = tabs.indexOf(tab);
      
      if (index === tabs.length - 1) { // 当前选中为最末一个，往左
        nextActiveTab = tabs[index - 1];
      } else {
        nextActiveTab = tabs[index + 1];
      }
    }
    
    if (nextActiveTab) {
      dispatchActivateTab(nextActiveTab);
    }
    
    dispatch(actionCloseTab(tab));
    
    if (onTabClose) {
      onTabClose(tab);
    }
  }, [activeTab, dispatch, dispatchActivateTab, onTabClose, tabs]);
}
