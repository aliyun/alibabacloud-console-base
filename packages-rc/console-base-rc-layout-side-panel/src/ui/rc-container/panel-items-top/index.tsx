import React from 'react';

import Flex from '@alicloud/console-base-rc-flex';

import {
  useItemsTop
} from '../../../model';
import {
  SidePanelItems
} from '../../rc';

export default function PanelItemsTop(): JSX.Element {
  const items = useItemsTop();
  
  return <Flex vertical flex>
    <SidePanelItems items={items} />
  </Flex>;
}