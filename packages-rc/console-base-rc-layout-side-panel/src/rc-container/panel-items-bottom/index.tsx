import React from 'react';
import styled from 'styled-components';

import {
  HrBase
} from '@alicloud/console-base-theme-sc-base';
import Flex from '@alicloud/console-base-rc-flex';

import {
  useProps,
  useItemsBottom
} from '../../model';
import {
  SidePanelItem
} from '../../rc';

const ScHr = styled(HrBase)`
  margin: 4px 8px;
`;

export default function PanelItemsBottom(): JSX.Element | null {
  const {
    children
  } = useProps();
  const items = useItemsBottom();
  
  return <Flex vertical>
    {children || items.length ? <ScHr /> : null}
    {children || items.map(v => <SidePanelItem {...v} />)}
  </Flex>;
}