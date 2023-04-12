import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {
  ThemeStyleLight,
  ThemeStyleDark,
  mixinBgPrimary,
  mixinTextPrimary,
  toggleBodyClass
} from '@alicloud/console-base-theme';
import {
  TopNavButton
} from '@alicloud/console-base-rc-top-nav';
import Icon from '@alicloud/console-base-rc-icon';

import intl from '../../intl';
import TopNavRightItem from '../top-nav-right-item';

const GlobalStyleDarkAll = createGlobalStyle`
  html {
    ${mixinBgPrimary}
    ${mixinTextPrimary}
  }
`;

export default function ThemeSwitcher(): JSX.Element {
  const [stateOn, setStateOn] = useState<boolean>(false);
  const handleToggle = useCallback(() => setStateOn(!stateOn), [stateOn, setStateOn]);
  
  useEffect(() => {
    toggleBodyClass(stateOn);
    
    return () => toggleBodyClass(!stateOn);
  }, [stateOn]);
  
  return <>
    <TopNavRightItem {...{
      label: <TopNavButton {...{
        spm: 'theme-switcher',
        label: {
          icon: <Icon type={stateOn ? 'lights-off' : 'lights-on'} />
        },
        onClick: handleToggle
      }} />,
      tip: intl(stateOn ? 'theme:message:switch_to_light!html' : 'theme:message:switch_to_dark!html')
    }} />
    {stateOn ? <>
      <GlobalStyleDarkAll />
      <ThemeStyleDark />
    </> : <ThemeStyleLight />}
  </>;
}
