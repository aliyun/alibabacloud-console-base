import React, {
  useState,
  useEffect
} from 'react';
import styled, {
  createGlobalStyle
} from 'styled-components';

import {
  MinimalNormalize,
  H1,
  InputSwitch
} from '@alicloud/demo-rc-elements';
import {
  ThemeStyleLight,
  ThemeStyleDark,
  mixinBgPrimary,
  mixinTextPrimary,
  toggleBodyClass
} from '@alicloud/console-base-theme';

const ScDiv = styled.div`
  margin-bottom: 16px;
`;

const DarkAll = createGlobalStyle`
  html {
    ${mixinBgPrimary}
    ${mixinTextPrimary}
  }
`;

function ToggleDemoThemeDark(): null {
  useEffect(() => {
    toggleBodyClass(true);
    
    return () => toggleBodyClass(false);
  }, []);
  
  return null;
}

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
      <DarkAll />
      <ToggleDemoThemeDark />
      <ThemeStyleDark />
    </> : <ThemeStyleLight />}
  </ScDiv>;
}
