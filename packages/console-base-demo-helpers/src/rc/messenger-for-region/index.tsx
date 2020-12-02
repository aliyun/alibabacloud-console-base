import React from 'react';

import {
  H2
} from '@alicloud/demo-rc-elements';

import OnChange from './on-change';
import ToggleVisible from './toggle-visible';
import ToggleGlobal from './toggle-global';
import SetId from './set-id';
import SetRegionGroups from './set-region-groups';
import SetRegions from './set-regions';
import SetResourceCount from './set-resource-count';

export default function MessengerForRegion(): JSX.Element {
  return <>
    <H2>地域选择器</H2>
    <OnChange />
    <ToggleVisible />
    <ToggleGlobal />
    <SetId />
    <SetRegionGroups />
    <SetRegions />
    <SetResourceCount />
  </>;
}
