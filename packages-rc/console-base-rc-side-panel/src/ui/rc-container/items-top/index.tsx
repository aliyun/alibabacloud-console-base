import React from 'react';

import Flex from '@alicloud/console-base-rc-flex';

import {
  useItemsTop
} from '../../../model';
import Items from '../items';

export default function ItemsTop(): JSX.Element {
  const items = useItemsTop();
  
  return <Flex vertical flex>
    <Items items={items} />
  </Flex>;
}
