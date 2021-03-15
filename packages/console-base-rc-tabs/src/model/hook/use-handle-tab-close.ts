import _without from 'lodash/without';
import {
  useCallback
} from 'react';

import {
  IPropsTab
} from '../../types';

import useProps from './use-props';
import useActiveKey from './use-active-key';
import useActiveTab from './use-active-tab';
import useHandleTabActivate from './use-handle-tab-activate';

export default function useHandleTabClose(): (tab: IPropsTab) => void {
  const {
    tabs,
    onTabClose
  } = useProps();
  const activeKey = useActiveKey();
  const activeTab = useActiveTab();
  const handleTabActivate = useHandleTabActivate();
  
  return useCallback((tab: IPropsTab): void => {
    const closeIndex = tabs.indexOf(tab);
    const activeIndex = tabs.indexOf(activeTab);
    let nextActiveKey: string | number | undefined;
    
    if (activeIndex === closeIndex) { // 关闭当前选中 tab，需要指定下一个选中 tab
      if (closeIndex === tabs.length - 1) { // 当前选中为最末一个，往左
        nextActiveKey = tabs[closeIndex - 1].key || closeIndex - 1;
      } else {
        nextActiveKey = tabs[closeIndex + 1].key || closeIndex;
      }
    } else if (closeIndex < activeIndex && typeof activeKey === 'number') { // 如果关闭的在 active 的前面，则需要调整 activeKey 为 activeIndex - 1
      nextActiveKey = activeIndex - 1;
    }
    
    if (onTabClose) {
      onTabClose(tab, _without(tabs, tab), tabs);
    }
    
    if (nextActiveKey !== undefined) {
      handleTabActivate(nextActiveKey);
    }
  }, [tabs, activeKey, activeTab, onTabClose, handleTabActivate]);
}
