import {
  useEffect
} from 'react';

import useModelState from './_use-model-state';
import useVisibleTabs from './use-visible-tabs';
import useActiveTab from './use-active-tab';
import useDispatchSetNavOffset from './use-dispatch-set-nav-offset';
import useDispatchSetNavOffsetMax from './use-dispatch-set-nav-offset-max';

/**
 * tabs/activeTab 等变化后调整 nav 节点的宽度以决定是否展示按钮【<】【>】
 */
export default function useEffectAdjustNavWidth(): void {
  const {
    width,
    domUi,
    domTabList
  } = useModelState();
  const visibleTabs = useVisibleTabs();
  const activeTab = useActiveTab();
  const dispatchSetNavOffset = useDispatchSetNavOffset();
  const dispatchSetNavOffsetMax = useDispatchSetNavOffsetMax();
  
  useEffect(() => {
    if (!domUi || !domTabList) {
      return;
    }
    
    const widthOfTabs = width > 0 ? width : domUi.offsetWidth;
    const widthOfNav = domTabList.offsetWidth;
    const activeIndex = activeTab ? visibleTabs.indexOf(activeTab) : -1;
    let activeOffset = 0;
    
    for (let i = 0; i < activeIndex; i++) {
      activeOffset -= (domTabList.children[i] as HTMLElement).offsetWidth;
    }
    
    dispatchSetNavOffsetMax(Math.min(widthOfTabs - widthOfNav - 40, 0)); // FIXME 40 硬了，等于 TAB_SCROLL_BUTTON_WIDTH * 2
    dispatchSetNavOffset(activeOffset);
  }, [width, visibleTabs, activeTab, domUi, domTabList, dispatchSetNavOffset, dispatchSetNavOffsetMax]);
}
