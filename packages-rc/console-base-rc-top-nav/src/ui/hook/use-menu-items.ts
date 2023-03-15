import {
  useMemo
} from 'react';

import {
  ModelPropsButton,
  useProps,
  useHandleMenuDropdownVisibleChange
} from '../../model';

import useMenuItemAccount from './use-menu-item-account';
import useMenuItemLanguage from './use-menu-item-language';
import useMenuItemHelp from './use-menu-item-help';

export default function useMenuItems(): ModelPropsButton[] {
  const {
    menus
  } = useProps();
  const help = useMenuItemHelp();
  const language = useMenuItemLanguage();
  const account = useMenuItemAccount();
  const handleMenuDropdownVisibleChange = useHandleMenuDropdownVisibleChange();
  
  return useMemo((): ModelPropsButton[] => [
    ...menus || [],
    help,
    language,
    account
  ].reduce((result: ModelPropsButton[], v) => {
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
