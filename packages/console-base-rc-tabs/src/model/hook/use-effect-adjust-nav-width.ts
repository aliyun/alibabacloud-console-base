import {
  useEffect
} from 'react';

import {
  WIDTH_SCROLLER_BUTTON
} from '../../const';

import useModelProps from './_use-model-props';
import useDomTabs from './use-dom-tabs';
import useDomNav from './use-dom-nav';
import useVisibleTabs from './use-visible-tabs';
import useActiveTab from './use-active-tab';
import useDispatchUpdateNavOffset from './use-dispatch-update-nav-offset';
import useDispatchUpdateNavOffsetMax from './use-dispatch-update-nav-offset-max';

/**
 * tabs/activeTab 等变化后调整 nav 节点的宽度以决定是否展示按钮【<】【>】
 */
export default function useEffectAdjustNavWidth(): void {
  const {
    width
  } = useModelProps();
  const domTabs = useDomTabs();
  const domNav = useDomNav();
  const visibleTabs = useVisibleTabs();
  const activeTab = useActiveTab();
  const dispatchUpdateNavOffset = useDispatchUpdateNavOffset();
  const dispatchUpdateNavOffsetMax = useDispatchUpdateNavOffsetMax();
  
  useEffect(() => {
    if (!domTabs || !domNav) {
      return;
    }
    
    const widthOfTabs = width > 0 ? width : domTabs.offsetWidth; // 容器有 transition 的情况下，width 变化不会立马影响 tabs 的实际宽度
    const widthOfNav = domNav.offsetWidth;
    
    const activeIndex = activeTab ? visibleTabs.indexOf(activeTab) : -1;
    let activeOffset = 0;
    
    for (let i = 0; i < activeIndex; i++) {
      activeOffset -= (domNav.children[i] as HTMLElement).offsetWidth;
    }
    
    dispatchUpdateNavOffsetMax(Math.min(widthOfTabs - widthOfNav - WIDTH_SCROLLER_BUTTON * 2, 0));
    dispatchUpdateNavOffset(activeOffset);
  }, [width, visibleTabs, activeTab, domTabs, domNav, dispatchUpdateNavOffset, dispatchUpdateNavOffsetMax]);
}
