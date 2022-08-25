import React from 'react';

import {
  RainbowText
} from '@alicloud/demo-rc-elements';
import TopNav from '@alicloud/console-base-rc-top-nav';

import {
  IDemoHelperTopNavProps
} from '../../types';
import {
  makeBodyTransition
} from '../../util';
import TopNavSection from '../top-nav-section';
import ThemeStyles from '../theme-styles';
import PkgInfo from '../pkg-info';
import ThemeSwitcher from '../theme-switcher';
import TopNavRightItem from '../top-nav-right-item';

makeBodyTransition(); // 为 body 加上 padding transition 效果，不放 effect 里

export default function DemoHelperTopNav({
  logo = 'FAKE',
  pkgInfo,
  rightItems,
  children,
  ...props
}: IDemoHelperTopNavProps): JSX.Element {
  return <TopNav {...{
    ...props,
    logo: {
      label: <RainbowText>{logo}</RainbowText>
    },
    customLeft: <TopNavSection>
      {children}
    </TopNavSection>,
    customRight: <TopNavSection>
      {rightItems?.map(v => <TopNavRightItem {...v} />)}
      <ThemeStyles />
      {pkgInfo ? <PkgInfo info={pkgInfo} /> : null}
      <ThemeSwitcher />
    </TopNavSection>
  }} />;
}