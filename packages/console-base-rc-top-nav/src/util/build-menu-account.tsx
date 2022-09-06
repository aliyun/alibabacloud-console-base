import React from 'react';

import {
  CLASS_ACCOUNT_BUTTON,
  DEFAULT_ACCOUNT_AVATAR
} from '../const';
import {
  AccountDisplay
} from '../rc';
import {
  ModelPropsButton,
  ModelPropsAccount
} from '../model';

export default function buildMenuAccount(account: ModelPropsAccount | null = null): ModelPropsButton | null {
  if (!account) {
    return null;
  }
  
  const {
    avatar,
    defaultAvatar,
    infoPrimary,
    infoSecondary,
    infoWidthMin,
    infoWidthMax,
    href,
    ...restProps
  } = account;
  
  return {
    key: 'account',
    force: true,
    ...restProps,
    className: CLASS_ACCOUNT_BUTTON,
    component: 'div', // href 由 AccountDisplay 接收，故此这里用 div
    label: <AccountDisplay {...{
      avatar: avatar || defaultAvatar || DEFAULT_ACCOUNT_AVATAR,
      infoPrimary,
      infoSecondary,
      infoWidthMin,
      infoWidthMax,
      href
    }} />
  };
}
