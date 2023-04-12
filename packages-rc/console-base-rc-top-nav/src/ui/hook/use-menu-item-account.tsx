import React, {
  useMemo
} from 'react';

import {
  TopNavButtonProps,
  useProps
} from '../../model';
import {
  CLASS_ACCOUNT_BUTTON,
  DEFAULT_ACCOUNT_AVATAR
} from '../const';
import {
  AccountDisplay
} from '../rc';

export default function useMenuItemAccount(): TopNavButtonProps | null {
  const {
    account
  } = useProps();
  
  return useMemo(() => {
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
  }, [account]);
}
