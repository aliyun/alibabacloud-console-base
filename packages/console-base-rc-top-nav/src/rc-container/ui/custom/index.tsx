import React from 'react';
import styled from 'styled-components';

import Flex from '../../../rc/flex';
import {
  useProps
} from '../../../model';

const ScCustom = styled(Flex)`
  flex: 1;
  justify-content: space-between;
  margin: 0 12px 0 0;
`;

/**
 * 自定义区域
 */
export default function Custom(): JSX.Element {
  const {
    customLeft,
    customRight
  } = useProps();
  
  return <ScCustom>
    <Flex>{customLeft}</Flex>
    <Flex>{customRight}</Flex>
  </ScCustom>;
}
