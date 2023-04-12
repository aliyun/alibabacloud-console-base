import React from 'react';

import Flex from '@alicloud/console-base-rc-flex';

import {
  useItemsTop
} from '../../../model';
import PanelItems from '../panel-items';

export default function PanelItemsTop(): JSX.Element {
  const items = useItemsTop();
  
  return <Flex vertical flex>
    <PanelItems items={items} />
  </Flex>;
}
