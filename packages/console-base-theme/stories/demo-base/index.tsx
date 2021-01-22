import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';
import {
  H1
} from '@alicloud/demo-rc-elements';

import Article from './article';

export default function DemoBase(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <H1>ArticleBase</H1>
    <Article />
  </>;
}

