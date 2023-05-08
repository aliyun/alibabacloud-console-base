import {
  useCallback
} from 'react';
import update from 'immutability-helper';

import {
  ITabItem
} from '../types';

import useModelProps from './_use-model-props';
import useVisibleTabs from './use-visible-tabs';
import useActiveTab from './use-active-tab';
import useHandleTabActivate from './use-handle-tab-activate';

export default function useHandleTabClose(): (tab: ITabItem) => void {
  const {
    tabs,
    onTabClose
  } = useModelProps();
  const visibleTabs = useVisibleTabs();
  const activeTab = useActiveTab();
  const handleTabActivate = useHandleTabActivate();
  
  return useCallback((tab: ITabItem): void => {
    const activeIndex = activeTab ? visibleTabs.indexOf(activeTab) : -1;
    let nextActiveTab: ITabItem | null = activeTab;
    
    if (tab === activeTab) { // 关闭当前选中 tab，需要指定下一个选中 tab
      if (visibleTabs.length === 1) { // 关闭仅剩的可见 tab
        nextActiveTab = null;
      } else if (activeIndex === visibleTabs.length - 1) { // 关闭最右
        nextActiveTab = visibleTabs[activeIndex - 1]!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
      } else {
        nextActiveTab = visibleTabs[activeIndex + 1]!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
      }
    }
    
    onTabClose?.(tab, update(tabs, {
      $splice: [[tabs.indexOf(tab), 1]]
    }), tabs);
    
    if (nextActiveTab !== activeTab) {
      handleTabActivate(nextActiveTab);
    }
  }, [tabs, visibleTabs, activeTab, handleTabActivate, onTabClose]);
}
