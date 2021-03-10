import _noop from 'lodash/noop';

import {
  IPropsTabs
} from '../../types';
import {
  IModelState
} from '../types';

export const DEFAULT_CONTEXT_PROPS: IPropsTabs = {
  tabs: [],
  width: -1,
  classNameForTabBar: '',
  classNameForTabItem: '',
  classNameForTabScroller: '',
  activeTab: undefined,
  defaultActiveTab: undefined,
  onTabActivate: _noop,
  onTabClose: _noop
};

export const DEFAULT_CONTEXT_STATE: IModelState = {
  activeTab: null,
  closedTabs: [],
  navOffset: 0,
  navOffsetMax: 0
};
