import React from 'react';
import styled from 'styled-components';

import {
  mixinBgSecondary,
  mixinBorderTertiaryBottom
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

const ScHeader = styled.header<IScProps>`
  ${props => (props.bg ? mixinBgSecondary : null)}
  ${props => (props.divider ? mixinBorderTertiaryBottom : null)}
  ${props => getCssPadding(props.padding)}
`;

export default function Header(): JSX.Element | null {
  const {
    header,
    headerBg,
    headerDivider
  } = useProps();
  
  return header ? <ScHeader {...{
    bg: headerBg,
    divider: headerDivider
  }}>{header}</ScHeader> : null;
}
