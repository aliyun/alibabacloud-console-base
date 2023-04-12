import React, {
  useState
} from 'react';
import styled from 'styled-components';
import {
  readableColor
} from 'polished';

import {
  InputSwitch
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
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  font-size: 12px;
`;
const ScColor = styled.div`
  padding: 8px;
  box-sizing: border-box;
`;

function Colors({
  colors
}: IProps): JSX.Element {
  return <ScColors>
    {Object.keys(colors).map(v => <ScColor key={v} style={{
      backgroundColor: colors[v as keyof ThemeColors],
      color: readableColor(colors[v as keyof ThemeColors], '#ccc', '#ee3')
    }}>{v}</ScColor>)}
  </ScColors>;
}

export default function DemoDefault(): JSX.Element {
  const [stateDark, setStateDark] = useState(false);
  
  return <>
    <InputSwitch {...{
      label: 'dark',
      value: stateDark,
      onChange: setStateDark
    }} />
    <Colors colors={stateDark ? COLOR_DARK : COLOR_LIGHT} />
  </>;
}
