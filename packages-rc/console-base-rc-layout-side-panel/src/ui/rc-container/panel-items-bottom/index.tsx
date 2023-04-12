import React from 'react';
import styled from 'styled-components';

import {
  HrBase
} from '@alicloud/console-base-theme-sc-base';
import Flex from '@alicloud/console-base-rc-flex';

import {
  useChildren,
  useItemsBottom
} from '../../../model';
import PanelItems from '../panel-items';

const ScHr = styled(HrBase)`
  margin: 4px 8px;
`;

export default function PanelItemsBottom(): JSX.Element | null {
  const children = useChildren();
  const items = useItemsBottom();
  
  return <Flex vertical>
    {children || items.length ? <ScHr /> : null}
    {children || <PanelItems items={items} />}
  </Flex>;
}
