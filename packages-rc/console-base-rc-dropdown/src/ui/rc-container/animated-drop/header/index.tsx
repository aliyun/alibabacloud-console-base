import React from 'react';
import styled from 'styled-components';

import {
  mixinBgSecondary,
  mixinBorderTertiaryBottom
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

const ScHeader = styled.header<IScProps>`
  ${props => (props.bg ? mixinBgSecondary : null)}
  ${props => (props.divider ? mixinBorderTertiaryBottom : null)}
  ${props => getCssPadding(props.padding)}
`;

export default function Header(): JSX.Element | null {
  const {
    header,
    headerBg,
    headerDivider,
    headerPadding
  } = useProps();
  
  return header ? <ScHeader {...{
    bg: headerBg,
    divider: headerDivider,
    padding: headerPadding
  }}>{header}</ScHeader> : null;
}
