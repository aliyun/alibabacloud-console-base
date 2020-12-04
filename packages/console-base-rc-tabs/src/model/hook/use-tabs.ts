import _without from 'lodash/without';
import {
  useMemo
} from 'react';

import {
  IPropsTab
} from '../../types';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useTabs(): IPropsTab[] {
  const {
    tabs
  } = useModelProps();
  const {
    closedTabs
  } = useModelState();
  
  return useMemo(() => (closedTabs.length ? _without(tabs, ...closedTabs) : tabs), [tabs, closedTabs]);
}
