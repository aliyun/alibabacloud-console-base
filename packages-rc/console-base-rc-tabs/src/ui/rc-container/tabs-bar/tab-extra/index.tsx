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
  height: 100%;
`;

export default function TabExtra(): JSX.Element | null {
  const {
    extra,
    classNameForTabExtra
  } = useProps();
  const refExtra = useRefExtra();
  
  return extra ? <ScTabExtra className={classNameForTabExtra} ref={refExtra}>{extra}</ScTabExtra> : null;
}
