import React from 'react';
import styled from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';
import {
  HrBaseV
} from '@alicloud/console-base-theme-sc-base';
import Flex from '@alicloud/console-base-rc-flex';

import {
  useProps
} from '../../../model';
import {
  PADDING_LOGO
} from '../../const';

const ScLogoExtra = styled(Flex)`
  margin-right: ${PADDING_LOGO}px;
`;
const ScHrV = styled(HrBaseV)`
  margin: 0 ${PADDING_LOGO}px 0 0;
  height: ${SIZE.HEIGHT_TOP_NAV / 2}px;
`;

export default function LogoExtra(): JSX.Element | null {
  const {
    logo,
    logoExtra
  } = useProps();
  
  return logo !== null && logoExtra ? <ScLogoExtra align="center">
    <ScHrV />
    {logoExtra}
  </ScLogoExtra> : null;
}
