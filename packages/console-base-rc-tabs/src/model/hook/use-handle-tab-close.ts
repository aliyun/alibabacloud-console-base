import {
  useCallback
} from 'react';
import update from 'immutability-helper';

import {
  IModelPropsTab
} from '../types';

import useModelProps from './_use-model-props';
import useVisibleTabs from './use-visible-tabs';
import useActiveTab from './use-active-tab';
import useHandleTabActivate from './use-handle-tab-activate';

export default function useHandleTabClose(): (tab: IModelPropsTab) => void {
  const {
    tabs,
    onTabClose
  } = useModelProps();
  const visibleTabs = useVisibleTabs();
  const activeTab = useActiveTab();
  const handleTabActivate = useHandleTabActivate();
  
  return useCallback((tab: IModelPropsTab): void => {
    const activeIndex = activeTab ? visibleTabs.indexOf(activeTab) : -1;
    const closeIndex = visibleTabs.indexOf(tab);
    let nextActiveTab: IModelPropsTab | null = activeTab;
    
    /**
     * 调整关闭后的 active，从关闭 tab 与 active 之间的关系看：
     * 
     * 1. 关闭的 === 当前 active - closeIndex === activeIndex
     *    1.1 关闭的是仅剩的可见 tab - visibleTabs.length === 1 → nextActiveIndex = -1 → key 成 ''
     *    1.2 关闭最右 - activeIndex === visibleTabs.length - 1 → nextActiveIndex = visibleTabs.length - 2
     *    1.3 其他 → nextActiveIndex 虽然不变，但 key 需要找到当前 visibleTabs 中的下一个（有的话）
     * 2. 关闭的在当前 active 之左 - closeIndex < activeIndex
     *    2.1 如果 active 自有 key（非 index） → 不需要调整
     *    2.2 否则 →  activeIndex - 1
     * 3. 关闭的在当前 active 之右 - closeIndex > activeIndex
     *    → 不需要调整
     */
    if (tab === activeTab) { // 关闭当前选中 tab，需要指定下一个选中 tab
      if (visibleTabs.length === 1) { // 关闭仅剩的可见 tab
        nextActiveTab = null;
      } else if (activeIndex === visibleTabs.length - 1) { // 关闭最右
        nextActiveTab = visibleTabs[activeIndex - 1];
      } else {
        nextActiveTab = visibleTabs[activeIndex + 1];
      }
    } else if (closeIndex < activeIndex) {
      nextActiveTab = activeTab;
    } // closeIndex > activeIndex 不需要调整
    
    if (onTabClose) {
      onTabClose(tab, update(tabs, {
        $splice: [[closeIndex, 1]]
      }), tabs);
    }
    
    if (nextActiveTab !== activeTab) {
      handleTabActivate(nextActiveTab);
    }
  }, [visibleTabs, activeTab, onTabClose, tabs, handleTabActivate]);
}
