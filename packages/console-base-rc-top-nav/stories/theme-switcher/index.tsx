import React, {
  useState
} from 'react';

import {
  ThemeStyleLight,
  ThemeStyleDark
} from '@alicloud/console-base-theme';
import {
  ChoiceItem,
  RadioGroup
} from '@alicloud/demo-rc-elements';

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

export default function ThemeSwitcher(): JSX.Element {
  const [stateTheme, setStateTheme] = useState<ETheme>(ETheme.LIGHT);
  
  return <>
    <RadioGroup {...{
      items: choices,
      onChange: setStateTheme
    }} />
    {stateTheme === ETheme.DARK ? <ThemeStyleDark /> : <ThemeStyleLight />}
  </>;
}
