import React from 'react';
import styled from 'styled-components';

import {
  HrBase
} from '@alicloud/console-base-theme-sc-base';
import Flex from '@alicloud/console-base-rc-flex';

import {
  useChildren,
  useItemsBottom, useQuickTop
} from '../../../model';
import Items from '../items';

import QuickTop from './quick-top';

const ScHr = styled(HrBase)`
  margin: 4px 8px;
`;

export default function ItemsBottom(): JSX.Element | null {
  const quickTop = useQuickTop();
  const children = useChildren();
  const items = useItemsBottom();
  
  return <Flex vertical>
    {quickTop.container && quickTop.visible ? <QuickTop /> : null}
    {children || items.length ? <ScHr /> : null}
    {children || <Items items={items} />}
  </Flex>;
}
