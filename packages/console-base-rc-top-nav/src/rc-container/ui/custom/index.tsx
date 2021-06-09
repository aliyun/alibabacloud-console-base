import React from 'react';
import styled from 'styled-components';

import Flex from '@alicloud/console-base-rc-flex';

import {
  useProps
} from '../../../model';

const ScCustom = styled(Flex)`
  flex: 1;
`;

const ScCustomInner = styled(ScCustom)`
  margin: 0 8px;
`;

/**
 * 自定义区域
 */
export default function Custom(): JSX.Element {
  const {
    customLeft,
    customRight
  } = useProps();
  
  return <ScCustom align="center">
    <ScCustomInner align="center" justify="flex-start">{customLeft}</ScCustomInner>
    <ScCustomInner align="center" justify="flex-end">{customRight}</ScCustomInner>
  </ScCustom>;
}
