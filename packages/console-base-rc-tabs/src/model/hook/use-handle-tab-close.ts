import _without from 'lodash/without';
import {
  useCallback
} from 'react';

import {
  IPropsTab
} from '../../types';

import useProps from './use-props';
import useVisibleTabs from './use-visible-tabs';
import useActiveKey from './use-active-key';
import useActiveTab from './use-active-tab';
import useHandleTabActivate from './use-handle-tab-activate';

export default function useHandleTabClose(): (tab: IPropsTab) => void {
  const {
    tabs,
    onTabClose
  } = useProps();
  const visibleTabs = useVisibleTabs();
  const activeKey = useActiveKey();
  const activeTab = useActiveTab();
  const handleTabActivate = useHandleTabActivate();
  
  return useCallback((tab: IPropsTab): void => {
    const activeIndex = visibleTabs.indexOf(activeTab);
    const closeIndex = visibleTabs.indexOf(tab);
    let nextActiveTab: IPropsTab | null = activeTab;
    let nextActiveIndex: number = activeIndex;
    
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
    if (closeIndex === activeIndex) { // 关闭当前选中 tab，需要指定下一个选中 tab
      if (visibleTabs.length === 1) { // 关闭仅剩的可见 tab
        nextActiveTab = null;
        nextActiveIndex = -1;
      } else if (activeIndex === visibleTabs.length - 1) { // 关闭最右
        nextActiveTab = visibleTabs[activeIndex - 1];
        nextActiveIndex = activeIndex - 1;
      } else {
        nextActiveTab = visibleTabs[activeIndex + 1];
        nextActiveIndex = activeIndex; // 不变
      }
    } else if (closeIndex < activeIndex && typeof activeKey === 'number') {
      nextActiveIndex = activeIndex - 1;
      nextActiveTab = activeTab;
    } // closeIndex > activeIndex 不需要调整
    
    if (onTabClose) {
      onTabClose(tab, _without(tabs, tab), tabs);
    }
    
    if (nextActiveTab !== activeTab || nextActiveIndex !== activeIndex) {
      if (nextActiveTab) {
        handleTabActivate(nextActiveTab.key || nextActiveIndex);
      } else {
        handleTabActivate('');
      }
    }
  }, [visibleTabs, activeTab, activeKey, onTabClose, tabs, handleTabActivate]);
}
