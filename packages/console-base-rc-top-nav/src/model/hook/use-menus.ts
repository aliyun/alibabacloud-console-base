import {
  useMemo
} from 'react';

import {
  IPropsTopNavButton
} from '../../types';
import buildMenuLanguage from '../../util/build-menu-language';
import buildMenuAccount from '../../util/build-menu-account';

import useProps from './use-props';
import useHandleMenuDropdownVisibleChange from './use-handle-menu-dropdown-visible-change';

export default function useMenus(): IPropsTopNavButton[] {
  const {
    menus,
    language,
    account = {}
  } = useProps();
  const handleMenuDropdownVisibleChange = useHandleMenuDropdownVisibleChange();
  
  return useMemo((): IPropsTopNavButton[] => {
    const menuLang = buildMenuLanguage(language);
    const menuAccount = buildMenuAccount(account);
  
    return [
      ...(menus || []),
      menuLang,
      menuAccount
    ].filter(v => v).map(v => {
      const {
        key,
        dropdown
      } = v!;
      
      if (dropdown && key) {
        return {
          ...v,
          dropdown: {
            ...dropdown,
            onVisibleChange: visible => handleMenuDropdownVisibleChange(visible, dropdown.onVisibleChange, key)
          }
        };
      }
      
      return v;
    }) as IPropsTopNavButton[];
  }, [language, menus, account, handleMenuDropdownVisibleChange]);
}
