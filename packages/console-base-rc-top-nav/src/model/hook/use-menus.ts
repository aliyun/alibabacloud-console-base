import {
  useMemo
} from 'react';

import {
  IModelPropsButton
} from '../types';
import {
  buildMenuHelp,
  buildMenuLanguage,
  buildMenuAccount
} from '../../util';

import useModelProps from './_use-model-props';
import useHandleMenuDropdownVisibleChange from './use-handle-menu-dropdown-visible-change';

export default function useMenus(): IModelPropsButton[] {
  const {
    menus,
    help,
    language,
    account
  } = useModelProps();
  const handleMenuDropdownVisibleChange = useHandleMenuDropdownVisibleChange();
  
  return useMemo((): IModelPropsButton[] => {
    const menuHelp = buildMenuHelp(help);
    const menuLang = buildMenuLanguage(language);
    const menuAccount = buildMenuAccount(account);
  
    return [
      ...menus || [],
      menuHelp,
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
    }) as IModelPropsButton[];
  }, [help, language, account, menus, handleMenuDropdownVisibleChange]);
}
