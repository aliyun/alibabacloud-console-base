import {
  useEffect
} from 'react';

import {
  WIDTH_SCROLLER_BUTTON
} from '../../../const';
import {
  useProps,
  useRefTabs,
  useRefNav,
  useTabs,
  useActiveTab,
  useDispatchUpdateNavOffset,
  useDispatchUpdateNavOffsetMax
} from '../../hook';

export default function AdjustNavWidth(): null {
  const {
    width
  } = useProps();
  const refTabs = useRefTabs();
  const refNav = useRefNav();
  const tabs = useTabs();
  const activeTab = useActiveTab();
  const dispatchUpdateNavOffset = useDispatchUpdateNavOffset();
  const dispatchUpdateNavOffsetMax = useDispatchUpdateNavOffsetMax();
  
  useEffect(() => {
    const widthOfTabs = width > 0 ? width : refTabs.current!.offsetWidth; // 容器有 transition 的情况下，width 变化不会立马影响 tabs 的实际宽度
    const widthOfNav = refNav.current!.offsetWidth;
    
    const activeIndex = tabs.indexOf(activeTab);
    let activeOffset = 0;
    
    for (let i = 0; i < activeIndex; i++) {
      activeOffset -= (refNav.current!.children[i] as HTMLElement).offsetWidth;
    }
    
    dispatchUpdateNavOffsetMax(Math.min(widthOfTabs - widthOfNav - WIDTH_SCROLLER_BUTTON * 2, 0));
    dispatchUpdateNavOffset(activeOffset);
  }, [width, tabs, activeTab, refTabs, refNav, dispatchUpdateNavOffset, dispatchUpdateNavOffsetMax]);
  
  return null;
}
