import React from 'react';
import styled from 'styled-components';

import {
  mixinBgSecondary,
  mixinBorderTertiaryTop
} from '@alicloud/console-base-theme';

import {
  getCssPadding
} from '../../../../util';
import {
  ModelProps,
  useProps
} from '../../../../model';

interface IScProps {
  bg?: boolean;
  divider?: boolean;
  padding?: ModelProps['bodyPadding'];
}

const ScFooter = styled.header<IScProps>`
  ${props => (props.bg ? mixinBgSecondary : null)}
  ${props => (props.divider ? mixinBorderTertiaryTop : null)}
  ${props => getCssPadding(props.padding)}
`;

export default function Footer(): JSX.Element | null {
  const {
    footer,
    footerBg,
    footerDivider
  } = useProps();
  
  return footer ? <ScFooter {...{
    bg: footerBg,
    divider: footerDivider
  }}>{footer}</ScFooter> : null;
}
