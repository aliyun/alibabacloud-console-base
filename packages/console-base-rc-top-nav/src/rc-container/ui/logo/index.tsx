import React from 'react';
import styled from 'styled-components';

import {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import TopNavButton from '../../../rc/button-in-top';
import IconAliyun from '../../../rc/icon-aliyun';
import {
  useProps
} from '../../../model';

const ScLogo = styled(TopNavButton)`
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
    theme: ButtonTheme.TEXT_BRAND_PRIMARY,
    ...logo,
    label: logo?.label || <IconAliyun />
  }} />;
}
