import React from 'react';
import styled from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  IconAliyun
} from '../../../rc';
import {
  useProps
} from '../../../model';

const FONT_SIZE = 18;

const ScLogo = styled(Button)`
  position: relative;
  padding: 0 12px;
  height: ${SIZE.HEIGHT_TOP_NAV}px;
  line-height: ${SIZE.HEIGHT_TOP_NAV}px;
  font-size: ${FONT_SIZE}px;
  font-weight: 600;
  
  &:after {
    content: '';
    position: absolute;
    top: ${(SIZE.HEIGHT_TOP_NAV - FONT_SIZE) / 2}px;
    right: 0;
    background-color: #ddd;
    width: 1px;
    height: ${FONT_SIZE}px;
  }
  
  .theme-dark & {
    color: #e6e6e6;
    
    &:after {
      background-color: #666;
    }
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
    label: logo.label || <IconAliyun />
  }} /> : null;
}
