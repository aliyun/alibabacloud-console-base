import React from 'react';
import styled from 'styled-components';

import {
  mixinBgSecondary,
  mixinBorderTertiaryTop
} from '@alicloud/console-base-theme';

import {
  ModelProps,
  useProps
} from '../../../../model';
import {
  getCssPadding
} from '../../../util';

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
    footerDivider,
    footerPadding
  } = useProps();
  
  return footer ? <ScFooter {...{
    bg: footerBg,
    divider: footerDivider,
    padding: footerPadding
  }}>{footer}</ScFooter> : null;
}
