import React from 'react';

import Tabs from '@alicloud/console-base-rc-tabs';

import {
  useTabsProps
} from '../../../model';

export default function Content(): JSX.Element {
  const tabsProps = useTabsProps();
  
  return <Tabs {...tabsProps} />;
}
