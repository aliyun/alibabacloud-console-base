import _without from 'lodash/without';
import {
  useMemo
} from 'react';

import {
  IPropsTab
} from '../../types';

import useModelState from './_use-model-state';
import useProps from './use-props';

export default function useTabs(): IPropsTab[] {
  const {
    tabs = []
  } = useProps();
  const {
    closedTabs
  } = useModelState();
  
  return useMemo(() => (closedTabs.length ? _without(tabs, ...closedTabs) : tabs), [tabs, closedTabs]);
}
