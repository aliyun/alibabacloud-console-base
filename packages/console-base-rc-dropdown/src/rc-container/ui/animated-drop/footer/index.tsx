import React from 'react';
import styled from 'styled-components';

import {
  mixinBorderTertiaryTop
} from '@alicloud/console-base-theme';

import {
  useProps
} from '../../../../model';

const ScDropFooter = styled.footer`
  ${mixinBorderTertiaryTop}
`;

export default function Footer(): JSX.Element | null {
  const {
    footer
  } = useProps();
  
  return footer ? <ScDropFooter>{footer}</ScDropFooter> : null;
}
