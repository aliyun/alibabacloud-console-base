import React from 'react';

import {
  H2
} from '@alicloud/demo-rc-elements';

import OnChange from './on-change';
import ToggleVisible from './toggle-visible';
import SetId from './set-id';
import SetResourceCount from './set-resource-count';

export default function MessengerForResourceGroup(): JSX.Element {
  return <>
    <H2>资源组选择器</H2>
    <OnChange />
    <ToggleVisible />
    <SetId />
    <SetResourceCount />
  </>;
}
