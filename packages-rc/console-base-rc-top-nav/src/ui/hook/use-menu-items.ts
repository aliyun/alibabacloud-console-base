import {
  useMemo
} from 'react';

import {
  TopNavButtonProps,
  useProps,
  useHandleMenuDropdownVisibleChange
} from '../../model';

import useMenuItemAccount from './use-menu-item-account';
import useMenuItemLanguage from './use-menu-item-language';
import useMenuItemHelp from './use-menu-item-help';

export default function useMenuItems(): TopNavButtonProps[] {
  const {
    menus
  } = useProps();
  const help = useMenuItemHelp();
  const language = useMenuItemLanguage();
  const account = useMenuItemAccount();
  const handleMenuDropdownVisibleChange = useHandleMenuDropdownVisibleChange();
  
  return useMemo((): TopNavButtonProps[] => [
    ...menus || [],
    help,
    language,
    account
  ].reduce((result: TopNavButtonProps[], v) => {
    if (!v) {
      return result;
    }
    
    const {
      key,
      dropdown
    } = v;
    
    if (dropdown && key) {
      result.push({
        ...v,
        dropdown: {
          ...dropdown,
          onVisibleChange: visible => handleMenuDropdownVisibleChange(visible, dropdown.onVisibleChange, key)
        }
      });
    } else {
      result.push(v);
    }
    
    return result;
  }, []), [help, language, account, menus, handleMenuDropdownVisibleChange]);
}
