import React from 'react';
import styled from 'styled-components';

import {
  HrBase
} from '@alicloud/console-base-theme-sc-base';
import Flex from '@alicloud/console-base-rc-flex';

import {
  useItemsBottom
} from '../../model';
import {
  Tool
} from '../../rc';

const ScHr = styled(HrBase)`
  margin: 4px 8px;
`;

export default function PanelItemsBottom(): JSX.Element | null {
  const items = useItemsBottom();
  
  return <Flex vertical>
    {items.length ? <ScHr /> : null}
    {items.map((v, i) => <Tool key={v.key || i} {...v} />)}
  </Flex>;
}