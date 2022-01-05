import {
  ModelPropsButton,
  ModelPropsButtonDropdownItem,
  ModelPropsLanguage
} from '../model';

export default function buildMenuLanguage(lang?: ModelPropsLanguage | null): ModelPropsButton | null {
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
