import {
  IPropsTab
} from '../../types';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useTabs from './use-tabs';

/**
 * 当前激活的 tab
 */
export default function useActiveTab(): IPropsTab {
  const {
    activeTab: activeTabInProps,
    defaultActiveTab
  } = useModelProps();
  const tabs = useTabs();
  const {
    activeTab: activeTabInState
  } = useModelState();
  const activeTab = activeTabInProps || activeTabInState || defaultActiveTab;
  
  return tabs.includes(activeTab) ? activeTab : tabs[0];
}
