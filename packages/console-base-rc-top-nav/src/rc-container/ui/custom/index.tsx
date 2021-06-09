import React from 'react';
import styled from 'styled-components';

import Flex from '@alicloud/console-base-rc-flex';

import {
  useProps
} from '../../../model';

const ScCustom = styled(Flex)`
  flex: 1;
`;
const ScCustomL = styled(ScCustom)`
  margin-right: 8px;
`;
const ScCustomR = ScCustom;

/**
 * 自定义区域
 */
export default function Custom(): JSX.Element {
  const {
    customLeft,
    customRight
  } = useProps();
  
  return <ScCustom align="center">
    <ScCustomL align="center" justify="flex-start">{customLeft}</ScCustomL>
    <ScCustomR align="center" justify="flex-end">{customRight}</ScCustomR>
  </ScCustom>;
}
