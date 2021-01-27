import {
  useMemo
} from 'react';

import {
  IPropsTopNavButton
} from '../../types';
import buildMenuLanguage from '../../util/build-menu-language';
import buildMenuAccount from '../../util/build-menu-account';

import useProps from './use-props';

export default function useMenus(): IPropsTopNavButton[] {
  const {
    menus,
    language,
    account = {}
  } = useProps();
  
  return useMemo((): IPropsTopNavButton[] => {
    const menuLang = buildMenuLanguage(language);
    const menuAccount = buildMenuAccount(account);
    
    return [
      ...(menus || []),
      menuLang,
      menuAccount
    ].filter(v => v);
  }, [language, menus, account]);
}
