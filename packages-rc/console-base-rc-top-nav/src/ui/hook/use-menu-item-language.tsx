import React, {
  useMemo
} from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  TopNavButtonProps,
  TopNavButtonDropdownItemProps,
  useProps
} from '../../model';

export default function useMenuItemLanguage(): TopNavButtonProps | null {
  const {
    language
  } = useProps();
  
  return useMemo(() => {
    if (!language) {
      return null;
    }
  
    const {
      current,
      items,
      onChange
    } = language;
    const currentLang = items.find(v => v.id === current);
  
    return {
      key: 'lang',
      label: currentLang ? currentLang.nameShort || currentLang.name : <Icon type="lang" />,
      dropdown: {
        items: items.reduce((result: TopNavButtonDropdownItemProps[], {
          id,
          name
        }) => {
          if (id === current) { // 忽略当前语言
            return result;
          }
          
          result.push({
            key: id,
            label: name,
            onClick(): void {
              onChange?.(id);
            }
          });
          
          return result;
        }, [])
      }
    };
  }, [language]);
}
