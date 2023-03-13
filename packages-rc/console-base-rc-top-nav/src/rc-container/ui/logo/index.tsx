import React from 'react';
import styled from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  PADDING_LOGO
} from '../../../const';
import {
  IconAliyun
} from '../../../rc';
import {
  useProps
} from '../../../model';

const ScLogo = styled(Button)`
  padding: 0 ${PADDING_LOGO}px;
  height: ${SIZE.HEIGHT_TOP_NAV}px;
  line-height: ${SIZE.HEIGHT_TOP_NAV}px;
  font-size: 18px;
  font-weight: 600;
  
  img,
  svg {
    max-height: 50%;
    vertical-align: middle;
  }
  
  .theme-dark & {
    color: #e6e6e6;
  }
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
    cursor: logo.onClick || logo.href ? 'pointer' : 'default',
    label: logo.label || <IconAliyun />
  }} /> : null;
}
