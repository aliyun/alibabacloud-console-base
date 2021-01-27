import {
  IPropsTopNavButton,
  IPropsTopNavButtonDropdownItem,
  IPropsTopNavLanguage
} from '../types';

export default function buildMenuLanguage(lang?: IPropsTopNavLanguage | null): IPropsTopNavButton | null {
  if (!lang) {
    return null;
  }
  
  const {
    current,
    items,
    onChange
  } = lang;
  const currentLang = items.find(v => v.id === current);
  
  return {
    key: 'lang',
    label: currentLang ? (currentLang.nameShort || currentLang.name) : {
      icon: 'lang'
    },
    dropdown: {
      items: items.reduce((result: IPropsTopNavButtonDropdownItem[], {
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
            if (onChange) {
              onChange(id);
            }
          }
        });
        
        return result;
      }, [])
    }
  };
}
