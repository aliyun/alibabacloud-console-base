import React from 'react';
import styled from 'styled-components';

import Flex from '@alicloud/console-base-rc-flex';

import {
  useProps,
  useRefExtra
} from '../../../../model';

const ScTabExtra = styled(Flex)`
  display: flex;
  align-items: center;
  padding: 0 4px;
  height: 100%;
`;

export default function TabExtra(): JSX.Element | null {
  const {
    extra
  } = useProps();
  const refExtra = useRefExtra();
  
  return extra ? <ScTabExtra ref={refExtra}>{extra}</ScTabExtra> : null;
}
