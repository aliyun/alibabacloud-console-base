import React from 'react';
import styled from 'styled-components';

import {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import ButtonInTop from '../../../rc/button-in-top';
import {
  useProps
} from '../../../model';

const ScLogo = styled(ButtonInTop)`
  font-size: 18px;
`;

export default function Logo(): JSX.Element {
  const {
    logo
  } = useProps();
  
  return <ScLogo {...{
    spm: 'logo',
    responsive: false,
    force: true,
    themeColor: ButtonTheme.TEXT_BRAND_PRIMARY,
    ...logo
  }} />;
}
