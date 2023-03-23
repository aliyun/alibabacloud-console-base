import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  H1
} from '@alicloud/demo-rc-elements';

import PkgInfo from '../pkg-info';

import Article from './article';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <H1>ArticleBase <a href="https://webdesign.tutsplus.com/articles/an-introduction-to-css-in-js-examples-pros-and-cons--cms-33574" target="_blank" rel="noreferrer">Original</a></H1>
    <Article />
  </>;
}
