import {
  IPropsTab
} from '../../types';

import useProps from './use-props';
import useActiveKey from './use-active-key';

/**
 * 当前激活的 tab
 */
export default function useActiveTab(): IPropsTab {
  const {
    tabs
  } = useProps();
  const activeKey = useActiveKey();
  
  if (typeof activeKey === 'number') {
    return tabs[activeKey] || tabs[0];
  }
  
  return tabs.find(v => v.key === activeKey) || tabs[0];
}
