import React from 'react';

import {
  IPropsTopNavButton,
  IPropsTopNavAccount
} from '../types';
import {
  DEFAULT_ACCOUNT_AVATAR
} from '../const';
import Avatar from '../rc/avatar';

export default function buildMenuAccount({
  avatar,
  defaultAvatar,
  ...restProps
}: IPropsTopNavAccount = {}): IPropsTopNavButton | null {
  return {
    key: 'account',
    force: true,
    ...restProps,
    label: <Avatar src={avatar || defaultAvatar || DEFAULT_ACCOUNT_AVATAR} alt="" />
  };
}
