import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';
import {
  H1
} from '@alicloud/demo-rc-elements';

import PkgInfo from '../pkg-info';

import Article from './article';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <H1>ArticleBase</H1>
    <Article />
  </>;
}