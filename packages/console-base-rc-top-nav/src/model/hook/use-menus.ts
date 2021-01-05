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
    account
  } = useProps();
  
  return useMemo(() => {
    const finalMenus = [...menus];
    const menuLang = buildMenuLanguage(language);
    const menuAccount = buildMenuAccount(account);
    
    if (menuLang) {
      finalMenus.push(menuLang);
    }
    
    if (menuAccount) {
      finalMenus.push(menuAccount);
    }
    
    return finalMenus;
  }, [language, menus, account]);
}
