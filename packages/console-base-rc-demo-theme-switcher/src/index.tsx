import React, {
  useState,
  useEffect
} from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {
  H1,
  ChoiceItem,
  RadioGroup
} from '@alicloud/demo-rc-elements';
import {
  ThemeStyleLight,
  ThemeStyleDark,
  mixinBgPrimary,
  mixinTextPrimary,
  toggleBodyClass
} from '@alicloud/console-base-theme';

enum ETheme {
  LIGHT,
  DARK
}

const choices: ChoiceItem<ETheme>[] = [{
  value: ETheme.LIGHT,
  label: 'Light'
}, {
  value: ETheme.DARK,
  label: 'Dark'
}];

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
  const [stateTheme, setStateTheme] = useState<ETheme>(ETheme.LIGHT);
  
  return <>
    <H1>Theme Switcher</H1>
    <RadioGroup<ETheme> {...{
      value: stateTheme,
      items: choices,
      onChange: setStateTheme
    }} />
    {stateTheme === ETheme.DARK ? <>
      <DarkAll />
      <ToggleDemoThemeDark />
      <ThemeStyleDark />
    </> : <ThemeStyleLight />}
  </>;
}
