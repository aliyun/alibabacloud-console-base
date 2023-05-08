import {
  ITabItem
} from '../types';

import useVisibleTabs from './use-visible-tabs';
import useActiveKey from './use-active-key';

/**
 * 当前激活的 tab
 */
export default function useActiveTab(): ITabItem | null {
  const visibleTabs = useVisibleTabs();
  const activeKey = useActiveKey();
  
  return visibleTabs.find(v => v.key === activeKey) || visibleTabs[0] || null;
}
