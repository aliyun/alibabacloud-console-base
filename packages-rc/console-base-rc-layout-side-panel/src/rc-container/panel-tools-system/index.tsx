import React from 'react';
import styled from 'styled-components';

import {
  HrBase
} from '@alicloud/console-base-theme-sc-base';
import Flex from '@alicloud/console-base-rc-flex';

import {
  useToolsSystem
} from '../../model';
import {
  Tool
} from '../../rc';

const ScHr = styled(HrBase)`
  margin: 4px 8px;
`;

export default function PanelToolsSystem(): JSX.Element | null {
  const itemsSystem = useToolsSystem();
  
  return <Flex vertical>
    {itemsSystem.length ? <ScHr /> : null}
    {itemsSystem.map((v, i) => <Tool key={v.key || i} {...v} />)}
  </Flex>;
}