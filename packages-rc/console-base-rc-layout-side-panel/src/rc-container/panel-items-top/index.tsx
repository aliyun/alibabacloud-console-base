import React from 'react';

import Flex from '@alicloud/console-base-rc-flex';

import {
  useItemsTop
} from '../../model';
import {
  Tool
} from '../../rc';

export default function PanelItemsTop(): JSX.Element {
  const items = useItemsTop();
  
  return <Flex vertical flex>
    {items.map((v, i) => <Tool key={v.key || i} {...v} />)}
  </Flex>;
}