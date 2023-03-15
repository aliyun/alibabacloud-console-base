import {
  useMemo
} from 'react';

import {
  ModelPropsButton,
  ModelPropsButtonDropdownItem,
  useProps
} from '../../model';

export default function useMenuItemLanguage(): ModelPropsButton | null {
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
      label: currentLang ? currentLang.nameShort || currentLang.name : {
        icon: 'lang'
      },
      dropdown: {
        items: items.reduce((result: ModelPropsButtonDropdownItem[], {
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
