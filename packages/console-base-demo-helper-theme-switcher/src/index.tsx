import React, {
  useState
} from 'react';
import styled from 'styled-components';

import {
  MinimalNormalize,
  H1,
  InputSwitch
} from '@alicloud/demo-rc-elements';
import {
  ThemeStyleLight,
  ThemeStyleDark
} from '@alicloud/console-base-theme';

import {
  DarkHtml,
  DarkBodyClass
} from './rc';

const ScDiv = styled.div`
  margin-bottom: 16px;
`;

export default function ThemeSwitcher(): JSX.Element {
  const [stateNormalize, setStateNormalize] = useState<boolean>(true);
  const [stateDark, setStateDark] = useState<boolean>(false);
  
  return <ScDiv>
    <H1>Theme Switcher</H1>
    <InputSwitch {...{
      label: '全局样式 ⛱',
      value: stateNormalize,
      onChange: setStateNormalize
    }} />
    <InputSwitch {...{
      label: 'Dark Side 🕋',
      value: stateDark,
      onChange: setStateDark
    }} />
    {stateNormalize ? <MinimalNormalize /> : null}
    {stateDark ? <>
      <DarkHtml />
      <DarkBodyClass />
      <ThemeStyleDark />
    </> : <ThemeStyleLight />}
  </ScDiv>;
}
