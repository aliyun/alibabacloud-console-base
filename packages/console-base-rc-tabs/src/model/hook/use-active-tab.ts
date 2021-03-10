import {
  IPropsTab
} from '../../types';

import useTabs from './use-tabs';
import useActiveKey from './use-active-key';

/**
 * 当前激活的 tab
 */
export default function useActiveTab(): IPropsTab {
  const activeKey = useActiveKey();
  const tabs = useTabs();
  
  if (typeof activeKey === 'number') {
    return tabs[activeKey] || tabs[0];
  }
  
  return tabs.find(v => v.key === activeKey) || tabs[0];
}
