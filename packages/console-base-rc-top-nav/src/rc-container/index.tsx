import React from 'react';

import Provider from '../model';
import {
  IPropsTopNav
} from '../types';

import Ui from './ui';

export default function WithProvider({
  dock,
  logo,
  menus,
  language,
  account,
  customLeft,
  customRight,
  onMenuDropdown,
  ...props
}: IPropsTopNav): JSX.Element {
  return <Provider props={{
    dock,
    logo,
    menus,
    language,
    account,
    customLeft,
    customRight,
    onMenuDropdown
  }}>
    <Ui {...props} />
  </Provider>;
}
