import React, {
  HTMLAttributes
} from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {
  LAYOUT
} from '@alicloud/console-base-styled-mixin';

import {
  CLASS_NAME_HAS_TOP_BAR
} from '../const';
import Provider from '../model';
import {
  IPropsTopNav
} from '../types';

import Ui from './ui';

// 全局样式
const GlobalStyle = createGlobalStyle`
  body.${CLASS_NAME_HAS_TOP_BAR} {
    padding-top: ${LAYOUT.TOP_BAR_HEIGHT}px;
  }
`;

interface IProps extends IPropsTopNav, HTMLAttributes<HTMLDivElement> {}

export default function TopNavWithProvider({
  dock,
  logo,
  menus,
  language,
  account,
  customLeft,
  customRight,
  ...domProps
}: IProps): JSX.Element {
  return <Provider props={{
    dock,
    logo,
    menus,
    language,
    account,
    customLeft,
    customRight
  }}>
    <GlobalStyle />
    <Ui {...domProps} />
  </Provider>;
}
