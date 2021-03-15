import {
  IPropsTab
} from '../../types';

import useVisibleTabs from './use-visible-tabs';
import useActiveKey from './use-active-key';

/**
 * 当前激活的 tab
 */
export default function useActiveTab(): IPropsTab {
  const visibleTabs = useVisibleTabs();
  const activeKey = useActiveKey();
  
  if (typeof activeKey === 'number') {
    return visibleTabs[activeKey] || visibleTabs[0];
  }
  
  return visibleTabs.find(v => v.key === activeKey) || visibleTabs[0];
}
