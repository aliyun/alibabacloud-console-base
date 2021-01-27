import React from 'react';
import styled from 'styled-components';

import {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import TopNavButton from '../../../rc/top-nav-button';
import IconAliyun from '../../../rc/icon-aliyun';
import {
  useProps
} from '../../../model';

const ScLogo = styled(TopNavButton)`
  padding: 0 12px;
  font-size: 18px;
`;

export default function Logo(): JSX.Element | null {
  const {
    logo = {}
  } = useProps();
  
  return logo ? <ScLogo {...{
    spm: 'logo',
    responsive: false,
    force: true,
    theme: ButtonTheme.TEXT_BRAND_PRIMARY,
    ...logo,
    label: logo.label || <IconAliyun />
  }} /> : null;
}
