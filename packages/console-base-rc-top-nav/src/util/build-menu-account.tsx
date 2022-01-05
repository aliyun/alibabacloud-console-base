import React from 'react';

import {
  DEFAULT_ACCOUNT_AVATAR
} from '../const';
import Avatar from '../rc/avatar';
import {
  ModelPropsButton,
  ModelPropsAccount
} from '../model';

export default function buildMenuAccount(account: ModelPropsAccount | null = {}): ModelPropsButton | null {
  if (!account) {
    return null;
  }
  
  const {
    avatar,
    defaultAvatar,
    ...restProps
  } = account;
  
  return {
    key: 'account',
    force: true,
    ...restProps,
    label: <Avatar src={avatar || defaultAvatar || DEFAULT_ACCOUNT_AVATAR} alt="" />
  };
}
