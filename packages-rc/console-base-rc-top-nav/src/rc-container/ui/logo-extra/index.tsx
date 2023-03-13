import React from 'react';
import styled from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';
import {
  HrBaseV
} from '@alicloud/console-base-theme-sc-base';

import {
  PADDING_LOGO
} from '../../../const';
import {
  useProps
} from '../../../model';

const ScHrV = styled(HrBaseV)`
  margin: 0 ${PADDING_LOGO}px 0 0;
  height: ${SIZE.HEIGHT_TOP_NAV / 2}px;
`;

export default function LogoExtra(): JSX.Element | null {
  const {
    logo,
    logoExtra
  } = useProps();
  
  return logo && logoExtra ? <>
    <ScHrV />
    {logoExtra}
  </> : null;
}
