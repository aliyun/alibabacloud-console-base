import React from 'react';
import styled from 'styled-components';

import {
  SIZE,
  mixinTextBrand,
  mixinBorderTertiaryRight
} from '@alicloud/console-base-theme';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  useProps
} from '../../../model';
import {
  DATA_KEY_J_LOGO,
  PADDING_LOGO
} from '../../const';

interface IScProps {
  $bordered?: boolean;
}

const ScLogo = styled(Button)<IScProps>`
  padding: 0 ${PADDING_LOGO}px;
  height: ${SIZE.HEIGHT_TOP_NAV}px;
  line-height: ${SIZE.HEIGHT_TOP_NAV}px;
  font-size: 18px;
  font-weight: 600;
  ${mixinTextBrand}
  ${props => (props.$bordered ? mixinBorderTertiaryRight : null)}
  
  img,
  svg {
    max-height: 36%;
    vertical-align: middle;
  }
  
  .theme-dark & {
    color: #e6e6e6;
  }
`;

export default function Logo(): JSX.Element | null {
  const {
    logo
  } = useProps();
  
  if (logo === null) {
    return null;
  }
  
  const {
    bordered,
    ...logoProps
  } = logo || {};
  
  return <ScLogo {...{
    ...logoProps,
    $bordered: bordered,
    spm: 'logo',
    theme: ButtonTheme.NONE,
    label: logoProps.label || 'Logo',
    cursor: logoProps.onClick || logoProps.href ? 'pointer' : 'default',
    [DATA_KEY_J_LOGO]: ''
  }} />;
}
