import _map from 'lodash/map';
import React from 'react';
import styled from 'styled-components';
import {
  readableColor
} from 'polished';

import {
  H1
} from '@alicloud/demo-rc-elements';

import {
  ThemeColors,
  COLOR_LIGHT,
  COLOR_DARK
} from '../../src';

interface IProps {
  colors: ThemeColors;
}

const ScColors = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
`;
const ScColor = styled.div`
  padding: 8px;
  box-sizing: border-box;
`;

function Colors({
  colors
}: IProps): JSX.Element {
  return <ScColors>
    {_map(colors, (v, k) => <ScColor key={k} style={{
      backgroundColor: v,
      color: readableColor(v, '#ccc', '#ee3')
    }}>{k}</ScColor>)}
  </ScColors>;
}

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>Light</H1>
    <Colors colors={COLOR_LIGHT} />
    <H1>Dark</H1>
    <Colors colors={COLOR_DARK} />
  </>;
}
