import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import PkgInfo from '../pkg-info';

import ZIndex from './z-index';
import ContentControlDialog from './content-control-dialog';
import Update from './update';
import LongContent from './long-content';
import Dynamic from './dynamic';
import PromiseValue from './promise-value';
import Multiple from './multiple';
import Focus from './focus';
import Esc from './esc';

export default function DemoSpecial(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <ZIndex />
    <ContentControlDialog />
    <Update />
    <LongContent />
    <Dynamic />
    <PromiseValue />
    <Multiple />
    <Focus />
    <Esc />
  </>;
}
