import React, {
  useState
} from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {
  ChoiceItem,
  RadioGroup
} from '@alicloud/demo-rc-elements';

import {
  ThemeStyleLight,
  ThemeStyleDark
} from '../../../src';

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
    background: #000;
    color: #fff;
  }
`;

export default function ThemeSwitcher(): JSX.Element {
  const [stateTheme, setStateTheme] = useState<ETheme>(ETheme.LIGHT);
  
  return <>
    <RadioGroup {...{
      items: choices,
      onChange: setStateTheme
    }} />
    {stateTheme === ETheme.DARK ? <>
      <DarkAll />
      <ThemeStyleDark />
    </> : <ThemeStyleLight />}
  </>;
}
