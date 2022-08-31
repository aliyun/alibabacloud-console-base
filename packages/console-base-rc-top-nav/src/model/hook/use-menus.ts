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
  
  return useMemo((): IModelPropsButton[] => [
    ...menus || [],
    buildMenuHelp(help),
    buildMenuLanguage(language),
    buildMenuAccount(account)
  ].reduce((result: IModelPropsButton[], v) => {
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
