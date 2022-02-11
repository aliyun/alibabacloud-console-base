import {
  useEffect
} from 'react';

import {
  WIDTH_SCROLLER_BUTTON
} from '../../const';

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
    domNav
  } = useModelState();
  const visibleTabs = useVisibleTabs();
  const activeTab = useActiveTab();
  const dispatchSetNavOffset = useDispatchSetNavOffset();
  const dispatchSetNavOffsetMax = useDispatchSetNavOffsetMax();
  
  useEffect(() => {
    if (!domUi || !domNav) {
      return;
    }
    
    const widthOfTabs = width > 0 ? width : domUi.offsetWidth;
    const widthOfNav = domNav.offsetWidth;
    
    const activeIndex = activeTab ? visibleTabs.indexOf(activeTab) : -1;
    let activeOffset = 0;
    
    for (let i = 0; i < activeIndex; i++) {
      activeOffset -= (domNav.children[i] as HTMLElement).offsetWidth;
    }
    
    dispatchSetNavOffsetMax(Math.min(widthOfTabs - widthOfNav - WIDTH_SCROLLER_BUTTON * 2, 0));
    dispatchSetNavOffset(activeOffset);
  }, [width, visibleTabs, activeTab, domUi, domNav, dispatchSetNavOffset, dispatchSetNavOffsetMax]);
}
