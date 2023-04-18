import React from 'react';
import styled from 'styled-components';

import {
  New,
  PublicBeta,
  Beta,
  Alpha
} from '@alicloud/console-base-rc-marks';

import {
  INavItemProps
} from '../../../model';
import NavItemIconRight from '../nav-item-icon-right';

const ScNew = styled(New)`
  transform: scale(0.85);
`;
const ScPublicBeta = styled(PublicBeta)`
  transform: scale(0.85);
`;
const ScBeta = styled(Beta)`
  transform: scale(0.85);
`;
const ScAlpha = styled(Alpha)`
  transform: scale(0.85);
`;

export default function renderMark(mark: INavItemProps['mark']): JSX.Element | undefined {
  switch (mark) {
    case 'external':
      return <NavItemIconRight type="external" />;
    case 'new':
      return <ScNew />;
    case 'beta-public':
      return <ScPublicBeta />;
    case 'beta':
      return <ScBeta />;
    case 'alpha':
      return <ScAlpha />;
    default:
      return undefined;
  }
}
